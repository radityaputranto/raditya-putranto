<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-label font-medium
      transition-all duration-300 hover:scale-105 cursor-default"
    :class="variantClasses"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'default' | 'primary' | 'secondary' | 'outline'
}>()

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary/10 text-primary border border-primary/20'
    case 'secondary':
      return 'bg-secondary/10 text-secondary border border-secondary/20'
    case 'outline':
      return 'bg-transparent text-on-surface-variant border border-outline-variant'
    default:
      return 'bg-surface-container text-on-surface-variant border border-outline-variant/30'
  }
})
</script>
