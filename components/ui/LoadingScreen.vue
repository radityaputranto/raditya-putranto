<template>
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-surface-container-lowest flex flex-col items-center justify-center">
      <div class="relative w-20 h-20 flex items-center justify-center">
        <!-- Outer spinning ring -->
        <div class="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        <div class="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        
        <!-- Inner pulse icon/logo -->
        <div class="absolute w-8 h-8 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(98,250,227,0.5)]"></div>
      </div>
      <p class="mt-6 font-label-md text-label-md text-outline tracking-[0.2em] uppercase animate-pulse">Loading</p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Saat komponen selesai di-*mount* di klien (hydration selesai)
  // Beri sedikit jeda agar transisi terasa lebih halus
  setTimeout(() => {
    isLoading.value = false
  }, 600)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
