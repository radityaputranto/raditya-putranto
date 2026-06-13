<template>
  <span
    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-label font-semibold"
    :class="variant === 'light'
      ? 'bg-white/15 text-white border border-white/20'
      : 'bg-green-50 text-green-700 border border-green-200'"
  >
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        :class="variant === 'light' ? 'bg-green-300' : 'bg-green-500'" />
      <span class="relative inline-flex rounded-full h-2 w-2"
        :class="variant === 'light' ? 'bg-green-300' : 'bg-green-500'" />
    </span>
    Available for Work
  </span>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'light'
}>()
</script>
