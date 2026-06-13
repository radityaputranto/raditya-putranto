<template>
  <main class="relative z-10 pt-[120px] md:pt-[160px] pb-24 px-margin-x max-w-container-max mx-auto min-h-screen">
    <!-- Header Section -->
    <section class="flex flex-col md:flex-row justify-between items-end gap-8 mb-12" v-reveal>
      <div class="flex flex-col gap-4 w-full md:w-1/2">
        <div class="flex items-center gap-4">
          <NuxtImg src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_nUwLzCzxnWX2TflLgwyQ1nA0Um5mMOivr7y1tieByMui5SwQtW0T1VlodJ74DMTqX4ArF8-GBemrBDLFGSnxqCcrxDAQT7AwafFyFHGjY6NMRChnYVf0cDRvINItiEIjB08YoscApy6MUqBLvY77-3x8RH66z9LCSI20Kmt-rYLZEJJbfGwCzE44Kt_IRSmjE7MPOWv3IQO-NyPWG6AAx6fvsE3Uu5GeV77CBkf2UChHJh0v9tJLes-T9WcNIQuDLrzjM5G9kUo" alt="Avatar" class="w-16 h-16 rounded-full border-2 border-surface-container-lowest shadow-sm object-cover" />
          <div>
            <h1 class="font-display text-display text-on-surface">Short Notes</h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant mt-1">Quick snippets and cheatsheets by Raditya.</p>
          </div>
        </div>
      </div>
      <!-- Search / Filter Bar -->
      <div class="w-full md:w-1/3 relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon name="material-symbols:search" class="text-outline-variant group-focus-within:text-primary transition-colors text-2xl" />
        </div>
        <input 
          v-model="searchQuery"
          class="w-full bg-surface-container-lowest/50 backdrop-blur-md border border-outline-variant/30 text-on-surface font-body-md rounded-full py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-secondary-fixed focus:bg-surface-container-lowest focus:border-transparent transition-all shadow-sm placeholder:text-outline-variant" 
          placeholder="Search notes..." 
          type="text"
        >
      </div>
    </section>
    
    <!-- Filter Tags -->
    <div class="flex flex-wrap gap-3 mb-8" v-reveal="1">
      <button 
        @click="activeCategory = 'All'"
        :class="activeCategory === 'All' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-tint hover:text-white'"
        class="px-4 py-1.5 rounded-full font-label-sm text-label-sm transition-all"
      >
        All
      </button>
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="activeCategory = cat"
        :class="activeCategory === cat ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-tint hover:text-white'"
        class="px-4 py-1.5 rounded-full font-label-sm text-label-sm transition-all"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Bento Grid: Cheatsheet Cards -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap items-stretch" v-reveal="2">
      <NuxtLink v-for="note in filteredNotes" :key="note.id" :to="'/notes/' + note.slug" class="block">
        <article class="h-full bg-surface-container-lowest/80 backdrop-blur-2xl border border-white/40 rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
          <div class="flex justify-between items-start">
            <div class="flex items-center gap-3">
              <!-- Using a default icon setup since we don't have explicit icons in DB -->
              <div class="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                <Icon name="material-symbols:description" class="text-2xl" />
              </div>
              <h2 class="font-headline-md text-headline-md text-on-surface line-clamp-2">{{ note.title }}</h2>
            </div>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant text-sm flex-1">{{ note.excerpt }}</p>
          
          <div class="mt-4 pt-4 border-t border-outline-variant/20 flex justify-between items-center">
            <div class="flex gap-2 text-[10px] font-bold uppercase tracking-wider text-outline-variant">
              <span>{{ new Date(note.published_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) }}</span>
            </div>
            <div class="flex items-center gap-1 text-outline-variant">
              <Icon name="material-symbols:visibility" style="font-size: 14px;" />
              <span class="text-label-sm">Read</span>
            </div>
          </div>
        </article>
      </NuxtLink>
    </section>
    
    <!-- Empty State -->
    <div v-if="filteredNotes.length === 0" class="text-center py-20">
      <p class="text-on-surface-variant">No notes found matching your criteria.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const { notes, fetchNotes } = useNotes()

const searchQuery = ref('')
const activeCategory = ref('All')

// Mock categories for UI
const categories = ['Vue.js', 'React', 'Git', 'DevOps', 'CSS']

await fetchNotes()

const filteredNotes = computed(() => {
  let filtered = notes.value
  
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    filtered = filtered.filter(n => 
      n.title.toLowerCase().includes(q) || 
      (n.excerpt && n.excerpt.toLowerCase().includes(q))
    )
  }
  
  // Note: Since category isn't in the DB schema for notes, we mock it or ignore it
  // In a real scenario we'd filter by category here
  
  return filtered
})

useHead({
  title: 'Short Notes - Raditya Putranto'
})
</script>
