<template>
  <div
    class="flex items-start gap-3 p-4 rounded-xl border animate-fade-in"
    :class="{
      'bg-error-container/50 text-on-error-container border-error/20': type === 'error',
      'bg-primary-container/50 text-on-primary-container border-primary/20': type === 'info',
      'bg-secondary-container/50 text-on-secondary-container border-secondary/20': type === 'success'
    }"
    role="alert"
  >
    <Icon
      v-if="iconName"
      :name="iconName"
      class="text-xl flex-shrink-0 mt-0.5"
      :class="{
        'text-error': type === 'error',
        'text-primary': type === 'info',
        'text-secondary': type === 'success'
      }"
    />
    <div class="flex-1 font-body-md text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: 'error' | 'info' | 'success'
  icon?: string
}>()

const type = computed(() => props.type || 'error')
const iconName = computed(() => {
  if (props.icon) return props.icon
  if (type.value === 'error') return 'material-symbols:error'
  if (type.value === 'success') return 'material-symbols:check-circle'
  return 'material-symbols:info'
})
</script>
