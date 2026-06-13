<template>
  <NuxtLink
    v-if="to || href"
    :to="to || href"
    class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
      bg-primary-container text-white font-heading font-semibold text-sm
      shadow-button transition-all duration-300 ease-smooth
      hover:bg-primary hover:scale-[1.02] hover:shadow-card-hover
      active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
      bg-primary-container text-white font-heading font-semibold text-sm
      shadow-button transition-all duration-300 ease-smooth
      hover:bg-primary hover:scale-[1.02] hover:shadow-card-hover
      active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  to?: string
  href?: string
}>()
</script>
