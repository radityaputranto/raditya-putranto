<template>
  <div v-if="project" class="min-h-screen pt-[120px] md:pt-[160px]">
    <!-- Breadcrumbs -->
    <section class="max-w-container-max mx-auto px-margin-x pt-12 pb-6" v-reveal>
      <nav class="flex items-center gap-2 text-on-surface-variant/70 font-label-sm text-label-sm">
        <NuxtLink to="/projects" class="hover:text-secondary transition-colors">Projects</NuxtLink>
        <Icon name="material-symbols:chevron-right" class="text-[14px]" />
        <span class="text-on-surface">{{ project.title }}</span>
      </nav>
    </section>

    <!-- Hero Section -->
    <section class="max-w-container-max mx-auto px-margin-x pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8" v-reveal>
          <div class="space-y-4">
            <span class="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-label-sm font-label-sm">{{ project.category || 'Case Study' }}</span>
            <h1 class="font-display text-display leading-tight">{{ project.title }}</h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              {{ project.description }}
            </p>
          </div>
          <div class="flex flex-wrap gap-4">
            <NuxtLink v-if="project.live_url" :to="project.live_url" target="_blank" class="bg-primary text-on-primary px-8 py-4 rounded-full font-label-sm text-label-sm flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
              Visit Website
              <Icon name="material-symbols:open-in-new" class="text-sm" />
            </NuxtLink>
            <NuxtLink v-if="project.repo_url" :to="project.repo_url" target="_blank" class="glass-panel text-primary border border-outline-variant px-8 py-4 rounded-full font-label-sm text-label-sm hover:bg-white transition-all">
              Source Code
            </NuxtLink>
          </div>
        </div>

        <div class="relative group" v-reveal="1">
          <div class="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div class="relative glass-panel rounded-[2rem] overflow-hidden shadow-2xl border border-white/40">
            <NuxtImg :src="project.thumbnail_url" :alt="project.title" class="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>

    <!-- Project Overview & Stack -->
    <section class="max-w-container-max mx-auto px-margin-x py-20 border-t border-outline-variant/20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-8 space-y-12" v-reveal>
          <!-- Using standard HTML wrapper for Markdown -->
          <div class="prose prose-lg max-w-none prose-headings:font-headline-md prose-headings:text-primary prose-p:text-on-surface-variant" v-html="renderedContent" />
        </div>
        
        <div class="lg:col-span-4" v-reveal="1">
          <div class="glass-panel p-8 rounded-3xl space-y-8 sticky top-28">
            <div>
              <h4 class="font-label-sm text-label-sm text-on-surface-variant uppercase mb-4 tracking-widest">Technical Stack</h4>
              <div class="flex flex-wrap gap-3">
                <span v-for="tech in project.tech_stack" :key="tech" class="bg-surface-container px-3 py-1.5 rounded-lg text-label-sm font-label-sm text-primary">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div v-if="project.role">
              <h4 class="font-label-sm text-label-sm text-on-surface-variant uppercase mb-4 tracking-widest">Role</h4>
              <p class="font-body-md text-body-md font-semibold">{{ project.role }}</p>
            </div>
            <div v-if="project.year">
              <h4 class="font-label-sm text-label-sm text-on-surface-variant uppercase mb-4 tracking-widest">Year</h4>
              <p class="font-body-md text-body-md font-semibold">{{ project.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <div v-else class="min-h-screen pt-[120px] md:pt-[160px] flex flex-col items-center justify-center text-center px-4">
    <h2 class="font-display text-display text-primary mb-4">Project Not Found</h2>
    <p class="text-on-surface-variant mb-8 text-body-lg">The project you're looking for doesn't exist.</p>
    <NuxtLink to="/projects" class="bg-primary text-on-primary px-8 py-4 rounded-full font-label-sm text-label-sm hover:opacity-90 transition-all">
      Browse Projects
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const route = useRoute()
const { fetchBySlug } = useProjects()

const project = ref(await fetchBySlug(route.params.slug as string))

useHead({
  title: project.value?.title ? `${project.value.title} - Raditya Putranto` : 'Project Not Found',
})

// Simple markdown-to-html rendering
const renderedContent = computed(() => {
  if (!project.value?.content) return ''
  return project.value.content
    .replace(/## (.*)/g, '<h2 class="font-headline-lg text-headline-lg mb-6 mt-12">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="font-headline-md text-headline-md mb-4 mt-8">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')
    .replace(/- (.*)/g, '<li class="text-on-surface-variant ml-4 mb-2">$1</li>')
    .replace(/\n\n/g, '<br /><br />')
})
</script>
