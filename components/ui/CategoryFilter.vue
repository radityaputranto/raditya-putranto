<template>
  <div class="mb-12 overflow-x-auto pb-4 -mx-margin-x px-margin-x md:mx-0 md:px-0 md:pb-0 md:overflow-visible" v-reveal="revealDelay">
    <div class="glass-panel p-1 rounded-full inline-flex items-center gap-1 whitespace-nowrap">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="$emit('update:modelValue', cat)"
        :class="modelValue === cat ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/30'"
        class="px-5 py-2.5 rounded-full font-label-sm text-label-sm transition-all duration-300 capitalize shrink-0"
      >
        {{ cat === 'all' || cat === 'All' ? 'All' : cat }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  categories: string[]
  modelValue: string
  revealDelay?: number
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const { vReveal } = useScrollReveal()
</script>
