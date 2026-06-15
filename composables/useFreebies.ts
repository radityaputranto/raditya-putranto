export interface Freebie {
  id: string
  title: string
  description: string
  category: string
  url: string
  clicks: number
  created_at: string
  updated_at: string
}

export function useFreebies() {
  const freebies = useState<Freebie[]>('freebies-data', () => [])
  const loading = useState('freebies-loading', () => false)

  const fetchFreebies = async () => {
    loading.value = true
    try {
      const client = useSupabaseClient()
      const { data, error } = await client
        .from('freebies')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      if (data) freebies.value = data
    } catch (e) {
      console.error('Error fetching freebies:', e)
    } finally {
      loading.value = false
    }
  }

  const trackClick = async (freebie: Freebie) => {
    // Optimistically update the UI
    freebie.clicks++
    
    try {
      const client = useSupabaseClient()
      // Call the RPC function we created in Supabase to securely increment
      const { error } = await client.rpc('increment_freebie_click', {
        freebie_id: freebie.id
      })
      
      if (error) {
        // Revert on error
        freebie.clicks--
        throw error
      }
    } catch (e) {
      console.error('Error tracking freebie click:', e)
    }
  }

  return { freebies, loading, fetchFreebies, trackClick }
}
