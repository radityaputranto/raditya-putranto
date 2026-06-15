<template>
  <div class="glass-panel overflow-hidden group relative flex flex-col hover:shadow-xl transition-all duration-500" :class="index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'">
    <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
      <h3 class="font-headline-lg text-headline-lg text-primary mb-4">{{ project.title }}</h3>
      <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-3 mb-8">
        <span v-for="tech in project.tech_stack" :key="tech" class="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label-sm text-label-sm text-on-surface-variant">{{ tech }}</span>
      </div>
      <div class="flex flex-wrap gap-4">
        <NuxtLink v-if="project.live_url && showVisitButton" :to="project.live_url" target="_blank" class="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-full hover:bg-secondary transition-all w-fit flex items-center gap-2">
          Visit Website
          <Icon name="material-symbols:open-in-new" class="text-[18px]" />
        </NuxtLink>
        <NuxtLink :to="'/projects/' + project.slug" class="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-full hover:bg-secondary transition-all w-fit flex items-center gap-2" :class="project.live_url && showVisitButton ? '!bg-transparent !text-primary border border-outline hover:!bg-surface-container-highest/30' : ''">
          View Details
          <Icon name="material-symbols:arrow-forward" class="text-[18px]" />
        </NuxtLink>
      </div>
    </div>
    <!-- Image with skeleton loading -->
    <div class="w-full md:w-1/2 bg-surface-container-high/50 relative overflow-hidden min-h-[400px]">
      <!-- Skeleton shimmer -->
      <div
        v-if="!imageLoaded"
        class="absolute inset-0 skeleton-shimmer"
      />
      <NuxtImg
        :alt="project.title"
        class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        :class="imageLoaded ? 'opacity-100' : 'opacity-0'"
        :src="project.thumbnail_url"
        loading="lazy"
        @load="imageLoaded = true"
      />
      <div
        class="absolute inset-y-0 w-full md:w-1/3 from-surface-container-lowest/90 to-transparent"
        :class="index % 2 !== 0 ? 'bg-gradient-to-l right-0' : 'bg-gradient-to-r left-0'"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

defineProps<{
  project: Project
  index: number
  showVisitButton?: boolean
}>()

const imageLoaded = ref(false)
</script>

<style scoped>
.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    rgba(var(--md-sys-color-surface-container), 0.6) 25%,
    rgba(var(--md-sys-color-surface-container-high), 0.8) 50%,
    rgba(var(--md-sys-color-surface-container), 0.6) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.6s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>

