<template>
  <NuxtLink
    v-if="to || href"
    :to="to || href"
    class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-card
      glass text-primary font-heading font-semibold text-sm
      transition-all duration-300 ease-smooth
      hover:bg-white/90 hover:shadow-card-hover hover:border-secondary/30 hover:scale-[1.02]
      active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-card
      glass text-primary font-heading font-semibold text-sm
      transition-all duration-300 ease-smooth
      hover:bg-white/90 hover:shadow-card-hover hover:border-secondary/30 hover:scale-[1.02]
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
