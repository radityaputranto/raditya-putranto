export interface Note {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  reading_time: number
  published: boolean
  published_at: string
  created_at: string
  updated_at: string
  views: number
}

export function useNotes() {
  const notes = useState<Note[]>('notes-data', () => [])
  const loading = useState('notes-loading', () => false)

  const fetchNotes = async () => {
    loading.value = true
    try {
      const client = useSupabaseClient()
      const { data, error } = await client
        .from('notes')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })
      
      if (error) throw error
      if (data) notes.value = data
    } catch (e) {
      console.error('Error fetching notes:', e)
    } finally {
      loading.value = false
    }
  }

  const fetchBySlug = async (slug: string): Promise<Note | undefined> => {
    try {
      const client = useSupabaseClient()
      const { data, error } = await client
        .from('notes')
        .select('*')
        .eq('slug', slug)
        .single()
        
      if (error) throw error
      return data || undefined
    } catch (e) {
      console.error('Error fetching note by slug:', e)
      return undefined
    }
  }

  const trackView = async (note: Note) => {
    // Optimistically update the UI
    note.views++

    try {
      const client = useSupabaseClient()
      const { error } = await client.rpc('increment_note_view', {
        note_id: note.id
      })

      if (error) {
        // Revert on error
        note.views--
        throw error
      }
    } catch (e) {
      console.error('Error tracking note view:', e)
    }
  }

  return { notes, loading, fetchNotes, fetchBySlug, trackView }
}
