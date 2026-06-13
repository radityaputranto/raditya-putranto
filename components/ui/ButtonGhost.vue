<template>
  <NuxtLink
    v-if="to || href"
    :to="to || href"
    class="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm
      transition-all duration-300 ease-smooth group
      hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    v-bind="$attrs"
  >
    <slot />
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
  </NuxtLink>
  <button
    v-else
    class="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm
      transition-all duration-300 ease-smooth group
      hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    v-bind="$attrs"
  >
    <slot />
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  to?: string
  href?: string
}>()
</script>
