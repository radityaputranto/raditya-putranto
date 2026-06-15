<template>
  <main class="max-w-container-max mx-auto px-margin-x pt-[120px] md:pt-[160px] pb-20 min-h-screen">
    <!-- Page Header -->
    <section class="flex flex-col md:flex-row justify-between items-end gap-8 mb-10" v-reveal>
      <div class="max-w-2xl w-full">
        <h1 class="font-display text-display text-primary mb-4">Freebies</h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          A collection of free resources, assets, and tools.
        </p>
      </div>
      <!-- Search / Filter Bar -->
      <div class="w-full md:w-1/3 relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon name="material-symbols:search" class="text-outline-variant group-focus-within:text-primary transition-colors text-2xl" />
        </div>
        <input 
          v-model="searchQuery"
          class="w-full bg-surface-container-lowest/50 backdrop-blur-md border border-outline-variant/30 text-on-surface font-body-md rounded-full py-3.5 pl-12 pr-4 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:bg-surface-container-lowest transition-all shadow-sm duration-200 placeholder:text-on-surface-variant/40" 
          placeholder="Search freebies..." 
          type="text"
        >
      </div>
    </section>
      
    <!-- Category Filter -->
    <UiCategoryFilter :categories="categories" v-model="activeCategory" />

    <!-- Freebies List (Full Width Cards) -->
    <div class="flex flex-col gap-4 animate-fade-in">
      <template v-if="filteredFreebies.length > 0">
        <a 
          v-for="freebie in filteredFreebies" 
          :key="freebie.id"
          :href="freebie.url"
          @click.prevent="handleClick(freebie)"
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
              <span class="font-label-sm text-label-sm">{{ formatDate(freebie.updated_at) }}</span>
            </div>
            <div class="flex items-center gap-2 text-on-surface-variant">
              <Icon name="material-symbols:ads-click" class="text-[16px]" />
              <span class="font-label-sm text-label-sm">{{ freebie.clicks }} clicks</span>
            </div>
          </div>
        </a>
      </template>
      <div v-else-if="!(pending || loading)" class="py-20 text-center glass-panel rounded-2xl w-full">
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
const searchQuery = ref('')

useHead({
  title: 'Freebies - Raditya Putranto',
  meta: [
    { name: 'description', content: 'Free digital resources, templates, and assets by Raditya Putranto.' }
  ]
})

const categories = ['all', 'photography', 'developer', 'design', 'others']
const activeCategory = ref('all')

const { freebies, loading, fetchFreebies, trackClick } = useFreebies()

const { pending } = useLazyAsyncData('freebies-list', async () => {
  await fetchFreebies()
  return true
})

const filteredFreebies = computed(() => {
  let filtered = freebies.value
  
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    filtered = filtered.filter(n => 
      n.title.toLowerCase().includes(q) || 
      (n.description && n.description.toLowerCase().includes(q))
    )
  }

  return filtered.filter(item => {
    return activeCategory.value === 'all' || item.category === activeCategory.value
  })
})

const handleClick = (freebie: any) => {
  trackClick(freebie)
  window.open(freebie.url, '_blank', 'noopener,noreferrer')
}

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
