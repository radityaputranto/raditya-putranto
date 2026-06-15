<template>
  <main class="max-w-container-max mx-auto px-margin-x pt-[120px] md:pt-[160px] pb-20 min-h-screen">
    <!-- Page Header -->
    <div class="mb-10" v-reveal>
      <div class="max-w-2xl w-full">
        <h1 class="font-display text-display text-primary mb-4">Freebies</h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          A collection of free resources, assets, and tools to help you create better digital experiences.
        </p>
      </div>
    </div>
      
    <!-- Category Filter -->
    <UiCategoryFilter :categories="categories" v-model="activeCategory" />

    <!-- Freebies List (Full Width Cards) -->
    <div class="flex flex-col gap-4 animate-fade-in">
      <template v-if="filteredFreebies.length > 0">
        <a 
          v-for="freebie in filteredFreebies" 
          :key="freebie.id"
          :href="freebie.url"
          target="_blank"
          rel="noopener noreferrer"
          class="glass-panel w-full p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          v-reveal
        >
          <div class="flex items-center gap-6">
            <div class="w-14 h-14 rounded-xl bg-surface-container-highest/50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
              <Icon :name="getCategoryIcon(freebie.category)" class="text-[28px]" />
            </div>
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="px-3 py-1 rounded-full bg-surface-container-highest/50 font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant">{{ freebie.category }}</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-primary mb-1 group-hover:text-primary-hover transition-colors">{{ freebie.title }}</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 max-w-3xl">{{ freebie.description }}</p>
            </div>
          </div>
          
          <div class="flex items-center md:flex-col md:items-end justify-between md:justify-center gap-4 shrink-0 border-t border-outline-variant/20 md:border-t-0 pt-4 md:pt-0 w-full md:w-auto mt-4 md:mt-0">
            <div class="flex items-center gap-2 text-on-surface-variant">
              <Icon name="material-symbols:calendar-today" class="text-[16px]" />
              <span class="font-label-sm text-label-sm">{{ formatDate(freebie.updatedAt) }}</span>
            </div>
            <div class="flex items-center gap-2 text-on-surface-variant">
              <Icon name="material-symbols:ads-click" class="text-[16px]" />
              <span class="font-label-sm text-label-sm">{{ freebie.clicks }} clicks</span>
            </div>
          </div>
        </a>
      </template>
      <div v-else class="py-20 text-center glass-panel rounded-2xl w-full">
        <Icon name="material-symbols:inbox" class="text-[48px] text-on-surface-variant mb-4 opacity-50" />
        <h3 class="font-headline-md text-headline-md text-primary mb-2">No freebies found</h3>
        <p class="font-body-md text-body-md text-on-surface-variant">Try adjusting your category filter.</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { vReveal } = useScrollReveal()

useHead({
  title: 'Freebies - Raditya Putranto',
  meta: [
    { name: 'description', content: 'Free digital resources, templates, and assets by Raditya Putranto.' }
  ]
})

const categories = ['all', 'photography', 'developer', 'design', 'others']
const activeCategory = ref('all')

interface Freebie {
  id: string
  title: string
  description: string
  category: string
  url: string
  updatedAt: string
  clicks: number
}

// Initial mock data, replace with actual fetch from API/Supabase if needed
const freebies = ref<Freebie[]>([
  {
    id: '1',
    title: 'Lightroom Presets - Urban Nights',
    description: 'A pack of 5 cinematic Lightroom presets perfect for nighttime street photography and urban landscapes.',
    category: 'photography',
    url: 'https://drive.google.com/drive/folders/mock',
    updatedAt: '2026-06-10',
    clicks: 1250
  },
  {
    id: '2',
    title: 'Nuxt 3 Minimal Portfolio Template',
    description: 'A clean, modern, and highly customizable portfolio template built with Nuxt 3 and Tailwind CSS.',
    category: 'developer',
    url: 'https://github.com/mock/nuxt-portfolio',
    updatedAt: '2026-05-25',
    clicks: 843
  },
  {
    id: '3',
    title: 'Figma Dashboard UI Kit',
    description: 'Comprehensive UI kit for building SaaS dashboards. Includes 50+ components, typography, and color tokens.',
    category: 'design',
    url: 'https://figma.com/community/file/mock',
    updatedAt: '2026-06-01',
    clicks: 2105
  },
  {
    id: '4',
    title: 'Notion Life Planner Template',
    description: 'An all-in-one Notion workspace to organize your personal goals, daily tasks, and project management.',
    category: 'others',
    url: 'https://notion.so/mock',
    updatedAt: '2026-04-15',
    clicks: 562
  },
  {
    id: '5',
    title: 'Film Emulation LUTs for Video',
    description: 'Give your footage an analog feel with these 3 color grading LUTs (.cube formats included).',
    category: 'photography',
    url: 'https://drive.google.com/drive/folders/mock2',
    updatedAt: '2026-06-12',
    clicks: 340
  }
])

const filteredFreebies = computed(() => {
  return freebies.value.filter(item => {
    return activeCategory.value === 'all' || item.category === activeCategory.value
  })
})

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'photography': return 'material-symbols:camera'
    case 'developer': return 'material-symbols:code'
    case 'design': return 'material-symbols:design-services'
    case 'others': return 'material-symbols:folder'
    default: return 'material-symbols:file-present'
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>
