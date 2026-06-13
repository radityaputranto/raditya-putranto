<template>
  <div class="mb-12">
    <p v-if="label" class="text-label-caps font-label uppercase tracking-widest text-secondary mb-3">
      {{ label }}
    </p>
    <h2 class="text-display-lg-mobile lg:text-display-lg font-heading text-primary">
      <slot />
    </h2>
    <p v-if="subtitle" class="mt-4 text-body-lg text-on-surface-variant max-w-2xl">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  subtitle?: string
}>()
</script>
