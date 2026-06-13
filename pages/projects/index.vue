<template>
  <div class="py-8 lg:py-16">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div v-reveal>
        <UiSectionHeading
          label="Portfolio"
          subtitle="A collection of projects I've worked on, from web applications to creative endeavors."
        >
          Projects
        </UiSectionHeading>
      </div>

      <!-- Filter Chips -->
      <div v-reveal="1" class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="px-4 py-2 rounded-full text-sm font-label font-medium transition-all duration-300 ease-smooth"
          :class="activeCategory === cat
            ? 'bg-primary-container text-white shadow-button'
            : 'glass text-on-surface-variant hover:bg-primary/5 hover:text-primary'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div v-if="!loading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SectionsProjectsProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project"
          v-reveal="index + 1"
        />
      </div>

      <UiLoadingSpinner v-else />

      <p v-if="filteredProjects.length === 0 && !loading" class="text-center text-on-surface-variant py-12">
        No projects found in this category.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Projects' })

const { vReveal } = useScrollReveal()
const { projects, loading, fetchProjects, categories } = useProjects()

const activeCategory = ref('All')

await fetchProjects()

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects.value
  return projects.value.filter(p => p.category === activeCategory.value)
})

watch(activeCategory, () => {
  // Trigger re-render for animations
})
</script>
