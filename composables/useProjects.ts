export interface Project {
  id: string
  slug: string
  title: string
  description: string
  content: string
  category: string
  tech_stack: string[]
  role: string
  year: number
  thumbnail_url: string
  gallery_urls: string[]
  live_url: string | null
  repo_url: string | null
  featured: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export function useProjects() {
  const projects = ref<Project[]>([])
  const loading = ref(false)

  const fetchProjects = async () => {
    loading.value = true
    try {
      const client = useSupabaseClient()
      const { data, error } = await client.from('projects').select('*').order('sort_order')
      if (error) throw error
      if (data) projects.value = data
    } catch (e) {
      console.error('Error fetching projects:', e)
    } finally {
      loading.value = false
    }
  }

  const fetchFeatured = async () => {
    loading.value = true
    try {
      const client = useSupabaseClient()
      const { data, error } = await client.from('projects').select('*').eq('featured', true).order('sort_order')
      if (error) throw error
      if (data) projects.value = data
    } catch (e) {
      console.error('Error fetching featured projects:', e)
    } finally {
      loading.value = false
    }
  }

  const fetchBySlug = async (slug: string): Promise<Project | undefined> => {
    try {
      const client = useSupabaseClient()
      const { data, error } = await client.from('projects').select('*').eq('slug', slug).single()
      if (error) throw error
      return data || undefined
    } catch (e) {
      console.error('Error fetching project by slug:', e)
      return undefined
    }
  }

  const categories = computed(() => {
    const cats = new Set(projects.value.map(p => p.category))
    return ['All', ...Array.from(cats)]
  })

  return { projects, loading, fetchProjects, fetchFeatured, fetchBySlug, categories }
}
