<template>
  <div v-if="note" class="pt-[120px] md:pt-[160px] min-h-screen">
    <!-- Header Section -->
    <header class="mb-12 max-w-3xl mx-auto px-margin-x pt-12" v-reveal>
      <nav class="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-4">
        <NuxtLink to="/notes" class="hover:text-secondary transition-colors">Notes</NuxtLink>
        <Icon name="material-symbols:chevron-right" class="text-[16px]" />
        <span class="text-primary">{{ note.title }}</span>
      </nav>
      
      <h1 class="font-display text-display text-primary mb-6 max-w-3xl">{{ note.title }}</h1>
      
      <div class="flex flex-wrap gap-6 items-center">
        <!-- Assuming we have a category, else mock 'Tech' -->
        <div class="flex items-center gap-2">
          <span class="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm">Tech Note</span>
        </div>
        <div class="flex items-center gap-2 text-on-surface-variant">
          <Icon name="material-symbols:calendar-today" class="text-[18px]" />
          <span class="font-label-sm text-label-sm">{{ formatDate(note.published_at) }}</span>
        </div>
        <div class="flex items-center gap-2 text-on-surface-variant">
          <Icon name="material-symbols:visibility" class="text-[18px]" />
          <span class="font-label-sm text-label-sm">Read</span>
        </div>
      </div>
    </header>

    <div class="max-w-3xl mx-auto space-y-10 px-margin-x pb-20">
      <!-- Article Body -->
      <div class="space-y-10 glass-panel rounded-2xl p-8 md:p-10" v-reveal="1">
        <section class="prose prose-lg max-w-none prose-headings:font-headline-md prose-headings:text-primary prose-p:text-on-surface-variant">
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">{{ note.excerpt }}</p>
          <div class="prose-content" v-html="renderedContent" />
        </section>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen pt-[120px] md:pt-[160px] flex flex-col items-center justify-center text-center px-4">
    <h2 class="font-display text-display text-primary mb-4">Note Not Found</h2>
    <p class="text-on-surface-variant mb-8 text-body-lg">The note you're looking for doesn't exist.</p>
    <NuxtLink to="/notes" class="bg-primary text-on-primary px-8 py-4 rounded-full font-label-sm text-label-sm hover:opacity-90 transition-all">
      Browse Notes
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const route = useRoute()
const { fetchBySlug } = useNotes()

const note = ref(await fetchBySlug(route.params.slug as string))

useHead({
  title: note.value?.title ? `${note.value.title} - Raditya Putranto` : 'Note Not Found',
})

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  })
}

// Simple markdown-to-html rendering with Stitch styles
const renderedContent = computed(() => {
  if (!note.value?.content) return ''
  return note.value.content
    .replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `
        <div class="bg-[#1a1c1f] text-[#e2e2e6] font-mono p-6 rounded-xl relative group overflow-x-auto my-6 border border-white/10 shadow-lg">
          <div class="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-[10px] font-bold text-outline-variant uppercase">${lang || 'Code'}</span>
          </div>
          <pre><code>${code.trim()}</code></pre>
        </div>`
    })
    .replace(/`([^`]+)`/g, '<code class="bg-surface-container px-1.5 py-0.5 rounded text-sm font-mono text-secondary">$1</code>')
    .replace(/## (.*)/g, '<h2 class="font-headline-lg text-headline-lg text-primary mb-6 mt-12">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="font-headline-md text-headline-md text-primary mb-4 mt-8">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')
    .replace(/⚠️/g, '<span class="text-amber-500">⚠️</span>')
    .replace(/- (.*)/g, '<li class="text-on-surface-variant ml-4 mb-2 list-disc">$1</li>')
    .replace(/\n\n/g, '<br /><br />')
})
</script>
