<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="w-12 h-12 rounded-full glass flex items-center justify-center
      transition-all duration-300 ease-smooth group
      hover:bg-primary-container hover:text-white hover:scale-110 hover:shadow-card-hover hover:border-transparent"
    :aria-label="name"
  >
    <span class="text-lg transition-transform duration-300 group-hover:scale-110">{{ icon }}</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  url: string
  icon: string
}>()
</script>
