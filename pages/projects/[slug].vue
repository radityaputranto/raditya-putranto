<template>
  <div v-if="project" class="py-8 lg:py-16">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <!-- Back Link -->
      <div v-reveal class="mb-8">
        <UiButtonGhost to="/projects">
          <span class="rotate-180 inline-block mr-1">→</span> Back to Projects
        </UiButtonGhost>
      </div>

      <!-- Hero Image -->
      <div v-reveal="1" class="glass rounded-glass overflow-hidden mb-10">
        <div class="aspect-video">
          <img
            :src="project.thumbnail_url"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Project Info -->
      <div class="max-w-3xl mx-auto">
        <div v-reveal="2" class="mb-8">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <UiChipTag variant="secondary">{{ project.category }}</UiChipTag>
            <span class="text-sm text-on-surface-variant font-label">{{ project.year }}</span>
            <span class="text-outline-variant">·</span>
            <span class="text-sm text-on-surface-variant font-label">{{ project.role }}</span>
          </div>

          <h1 class="text-display-lg-mobile lg:text-display-lg font-heading text-primary mb-4">
            {{ project.title }}
          </h1>

          <p class="text-body-lg text-on-surface-variant">
            {{ project.description }}
          </p>
        </div>

        <!-- Tech Stack -->
        <div v-reveal="3" class="flex flex-wrap gap-2 mb-10">
          <UiChipTag v-for="tech in project.tech_stack" :key="tech" variant="primary">
            {{ tech }}
          </UiChipTag>
        </div>

        <!-- Action Buttons -->
        <div v-reveal="4" class="flex flex-wrap gap-3 mb-12">
          <UiButtonPrimary v-if="project.live_url" :href="project.live_url" target="_blank">
            🌐 Visit Live Site
          </UiButtonPrimary>
          <UiButtonGlass v-if="project.repo_url" :href="project.repo_url" target="_blank">
            ⌨ View Source Code
          </UiButtonGlass>
        </div>

        <!-- Content -->
        <article v-reveal="5" class="prose prose-lg max-w-none">
          <div class="glass rounded-glass p-8 lg:p-12 text-on-surface" v-html="renderedContent" />
        </article>
      </div>
    </div>
  </div>

  <div v-else class="py-24 text-center">
    <h2 class="text-headline-md font-heading text-primary mb-4">Project Not Found</h2>
    <p class="text-on-surface-variant mb-6">The project you're looking for doesn't exist.</p>
    <UiButtonPrimary to="/projects">Browse Projects</UiButtonPrimary>
  </div>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const route = useRoute()
const { fetchBySlug } = useProjects()

const project = ref(await fetchBySlug(route.params.slug as string))

useHead({
  title: project.value?.title || 'Project Not Found',
})

// Simple markdown-to-html rendering
const renderedContent = computed(() => {
  if (!project.value?.content) return ''
  return project.value.content
    .replace(/## (.*)/g, '<h2 class="text-headline-md font-heading text-primary mt-8 mb-4">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="text-lg font-heading font-semibold text-primary mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')
    .replace(/- (.*)/g, '<li class="text-on-surface-variant ml-4">$1</li>')
    .replace(/\n\n/g, '<br /><br />')
})
</script>
