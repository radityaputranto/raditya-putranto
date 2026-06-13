<template>
  <div class="py-8 lg:py-16">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <UiSectionHeading
        v-reveal
        label="Blog"
        subtitle="Short notes, tutorials, and thoughts on web development and technology."
      >
        Short Notes
      </UiSectionHeading>

      <div v-if="!loading" class="grid md:grid-cols-2 gap-6">
        <SectionsNotesNoteCard
          v-for="(note, index) in notes"
          :key="note.id"
          :note="note"
          v-reveal="index + 1"
        />
      </div>

      <UiLoadingSpinner v-else />

      <p v-if="notes.length === 0 && !loading" class="text-center text-on-surface-variant py-12">
        No notes published yet. Stay tuned!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Notes' })
const { vReveal } = useScrollReveal()
const { notes, loading, fetchNotes } = useNotes()

await fetchNotes()
</script>
