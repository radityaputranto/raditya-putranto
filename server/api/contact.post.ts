import { google } from 'googleapis'

// In-memory rate limiting store
// Key: IP address, Value: { count, resetTime }
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_MAX = 3 // Max 3 requests
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // Per 15 minutes

export default defineEventHandler(async (event) => {
  try {
    // 1. Rate Limiting Logic
    const ip = getRequestIP(event) || 'unknown-ip'
    const now = Date.now()

    let limitRecord = rateLimitStore.get(ip)
    
    // Clean up expired records
    if (limitRecord && now > limitRecord.resetTime) {
      rateLimitStore.delete(ip)
      limitRecord = undefined
    }

    if (!limitRecord) {
      rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    } else {
      if (limitRecord.count >= RATE_LIMIT_MAX) {
        throw createError({
          statusCode: 429,
          statusMessage: 'Too Many Requests',
          message: 'Anda telah mencapai batas pengiriman pesan. Silakan coba lagi nanti dalam 15 menit.',
        })
      }
      limitRecord.count++
    }

    const body = await readBody(event)
    const { name, email, message } = body

    if (!name || !email || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Name, email, and message are required',
      })
    }

    const config = useRuntimeConfig()
    
    // Replace literal '\n' characters in the environment variable with actual newlines
    const privateKey = config.googlePrivateKey.replace(/\\n/g, '\n')

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: config.googleServiceAccountEmail,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Append to sheet
    // Assumes the first sheet is where data goes and headers are in row 1
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: config.googleSpreadsheetId,
      range: 'Sheet1!A:D', // Change 'Sheet1' to your actual sheet name if it's different.
      valueInputOption: 'RAW', // Changed from USER_ENTERED to RAW to prevent formula injection
      requestBody: {
        values: [
          [new Date().toISOString(), name, email, message]
        ]
      }
    })

    return { success: true, message: 'Message sent successfully' }
  } catch (error: any) {
    console.error('Error submitting to Google Sheets:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to submit message',
      message: error.message,
    })
  }
})
