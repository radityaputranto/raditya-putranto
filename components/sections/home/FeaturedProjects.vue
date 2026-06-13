<template>
  <section class="py-section-gap">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <div v-reveal class="flex items-end justify-between mb-12">
        <UiSectionHeading label="Portfolio" subtitle="A selection of my recent work and projects.">
          Featured Projects
        </UiSectionHeading>
        <UiButtonGhost to="/projects" class="hidden md:flex">
          View All
        </UiButtonGhost>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SectionsProjectsProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          v-reveal="index + 1"
        />
      </div>

      <div class="mt-8 flex justify-center md:hidden">
        <UiButtonGhost to="/projects">View All Projects</UiButtonGhost>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const { projects, fetchFeatured } = useProjects()

await fetchFeatured()
</script>
