<template>
  <section class="py-section-gap">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <UiSectionHeading v-reveal label="Skills" subtitle="Technologies and tools I work with daily.">
        Tech Stack
      </UiSectionHeading>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          v-reveal="index"
          class="glass-card-interactive flex items-center gap-3 !p-4"
        >
          <span class="text-2xl">{{ skill.icon }}</span>
          <div>
            <p class="font-semibold text-primary text-sm">{{ skill.name }}</p>
            <p class="text-xs text-on-surface-variant">{{ skill.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()

const skills = [
  { name: 'Vue.js', category: 'Frontend', icon: '💚' },
  { name: 'Nuxt.js', category: 'Framework', icon: '💎' },
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', category: 'Language', icon: '🔷' },
  { name: 'JavaScript', category: 'Language', icon: '🟨' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Supabase', category: 'Backend', icon: '⚡' },
  { name: 'Git', category: 'Tools', icon: '🔀' },
  { name: 'Figma', category: 'Design', icon: '🎯' },
  { name: 'Photography', category: 'Creative', icon: '📷' },
  { name: 'Lightroom', category: 'Creative', icon: '🖼️' },
]
</script>
