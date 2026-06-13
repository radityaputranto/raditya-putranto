<template>
  <NuxtLink :to="`/projects/${project.slug}`" class="group block">
    <div class="glass-card-interactive overflow-hidden !p-0">
      <!-- Thumbnail -->
      <div class="relative overflow-hidden aspect-video">
        <img
          :src="project.thumbnail_url"
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <!-- Content -->
      <div class="p-6">
        <div class="flex items-center gap-2 mb-3">
          <UiChipTag variant="secondary">{{ project.category }}</UiChipTag>
          <span class="text-xs text-on-surface-variant font-label">{{ project.year }}</span>
        </div>

        <h3 class="text-lg font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
          {{ project.title }}
        </h3>

        <p class="text-sm text-on-surface-variant line-clamp-2 mb-4">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-1.5">
          <UiChipTag v-for="tech in project.tech_stack.slice(0, 3)" :key="tech">
            {{ tech }}
          </UiChipTag>
          <UiChipTag v-if="project.tech_stack.length > 3" variant="outline">
            +{{ project.tech_stack.length - 3 }}
          </UiChipTag>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

defineProps<{
  project: Project
}>()
</script>
