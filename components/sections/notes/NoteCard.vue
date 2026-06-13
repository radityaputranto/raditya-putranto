<template>
  <NuxtLink :to="`/notes/${note.slug}`" class="group block">
    <div class="glass-card-interactive">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xs text-on-surface-variant font-label">
          {{ formatDate(note.published_at) }}
        </span>
        <span class="text-outline-variant">·</span>
        <span class="text-xs text-on-surface-variant font-label">
          {{ note.reading_time }} min read
        </span>
      </div>

      <h3 class="text-lg font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
        {{ note.title }}
      </h3>

      <p class="text-sm text-on-surface-variant line-clamp-2 mb-4">
        {{ note.excerpt }}
      </p>

      <div class="flex flex-wrap gap-1.5">
        <UiChipTag v-for="tag in note.tags" :key="tag" variant="primary">
          {{ tag }}
        </UiChipTag>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Note } from '~/composables/useNotes'

defineProps<{ note: Note }>()

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>
