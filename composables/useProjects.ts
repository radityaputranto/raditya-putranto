import { projectsData } from '~/data/projects'
import type { Project } from '~/data/projects'

export type { Project }

export function useProjects() {
  const projects = useState<Project[]>('global-projects-state', () => projectsData)
  const loading = ref(false)

  const fetchProjects = async () => {
    // Static data is already loaded
    projects.value = projectsData
  }

  const fetchFeatured = async () => {
    // Static data is already loaded, filter by is_featured and get max 3
    projects.value = projectsData.filter(p => p.is_featured).slice(0, 3)
  }

  const fetchBySlug = async (slug: string): Promise<Project | undefined> => {
    // Return from static data
    return projectsData.find(p => p.slug === slug)
  }

  const featuredProjects = computed(() => {
    return projects.value.filter(p => p.is_featured).slice(0, 3)
  })

  const categories = computed(() => {
    return ['All', 'Web App', 'Landing Page', 'Panel']
  })

  return { projects, featuredProjects, loading, fetchProjects, fetchFeatured, fetchBySlug, categories }
}
