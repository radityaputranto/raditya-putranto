<template>
  <div
    class="glass-card-interactive overflow-hidden"
    :class="[dense ? 'p-4' : 'p-6']"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  dense?: boolean
}>()
</script>
