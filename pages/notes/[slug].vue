<template>
  <div v-if="note" class="py-8 lg:py-16">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <!-- Back Link -->
      <div v-reveal class="mb-8">
        <UiButtonGhost to="/notes">
          <span class="rotate-180 inline-block mr-1">→</span> Back to Notes
        </UiButtonGhost>
      </div>

      <!-- Article Header -->
      <header v-reveal="1" class="mb-10">
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="text-sm text-on-surface-variant font-label">
            {{ formatDate(note.published_at) }}
          </span>
          <span class="text-outline-variant">·</span>
          <span class="text-sm text-on-surface-variant font-label">
            {{ note.reading_time }} min read
          </span>
        </div>

        <h1 class="text-display-lg-mobile lg:text-display-lg font-heading text-primary mb-4">
          {{ note.title }}
        </h1>

        <p class="text-body-lg text-on-surface-variant">
          {{ note.excerpt }}
        </p>

        <div class="flex flex-wrap gap-2 mt-6">
          <UiChipTag v-for="tag in note.tags" :key="tag" variant="primary">
            {{ tag }}
          </UiChipTag>
        </div>
      </header>

      <!-- Article Content -->
      <article v-reveal="2" class="glass rounded-glass p-8 lg:p-12">
        <div class="prose-content" v-html="renderedContent" />
      </article>
    </div>
  </div>

  <div v-else class="py-24 text-center">
    <h2 class="text-headline-md font-heading text-primary mb-4">Note Not Found</h2>
    <p class="text-on-surface-variant mb-6">The note you're looking for doesn't exist.</p>
    <UiButtonPrimary to="/notes">Browse Notes</UiButtonPrimary>
  </div>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const route = useRoute()
const { fetchBySlug } = useNotes()

const note = ref(await fetchBySlug(route.params.slug as string))

useHead({
  title: note.value?.title || 'Note Not Found',
})

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const renderedContent = computed(() => {
  if (!note.value?.content) return ''
  return note.value.content
    .replace(/```(\w+)\n([\s\S]*?)```/g, '<pre class="code-block"><code class="language-$1">$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/## (.*)/g, '<h2 class="content-h2">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="content-h3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/⚠️/g, '<span class="text-amber-500">⚠️</span>')
    .replace(/\| (.*) \|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      return '<tr>' + cells.map(c => `<td class="table-cell">${c.trim()}</td>`).join('') + '</tr>'
    })
    .replace(/- (.*)/g, '<li class="content-li">$1</li>')
    .replace(/\n\n/g, '<br /><br />')
})
</script>

<style scoped>
.prose-content {
  @apply text-on-surface leading-relaxed;
}

.prose-content :deep(.content-h2) {
  @apply text-xl font-heading font-semibold text-primary mt-8 mb-4;
}

.prose-content :deep(.content-h3) {
  @apply text-lg font-heading font-semibold text-primary mt-6 mb-3;
}

.prose-content :deep(.content-li) {
  @apply text-on-surface-variant ml-6 mb-1 list-disc;
}

.prose-content :deep(.code-block) {
  @apply bg-primary text-primary-fixed p-4 rounded-card overflow-x-auto my-4 text-sm font-mono;
}

.prose-content :deep(.inline-code) {
  @apply bg-surface-container px-1.5 py-0.5 rounded text-sm font-mono text-secondary;
}

.prose-content :deep(.table-cell) {
  @apply px-3 py-2 border-b border-outline-variant/20 text-sm;
}

.prose-content :deep(strong) {
  @apply font-semibold text-primary;
}
</style>
