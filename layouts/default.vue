<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <!-- Atmospheric Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div class="bg-blob w-[600px] h-[600px] bg-tertiary-fixed/30 top-[-10%] left-[-10%]"></div>
      <div class="bg-blob w-[800px] h-[800px] bg-secondary-fixed-dim/40 bottom-[-20%] right-[-10%]" style="animation-direction: reverse; animation-duration: 25s;"></div>
      <div class="bg-blob w-[500px] h-[500px] bg-primary-fixed-dim/20 top-[40%] left-[30%]"></div>
    </div>

    <!-- Navigation -->
    <LayoutAppHeader @toggle-drawer="isDrawerOpen = true" />
    <LayoutMobileDrawer :open="isDrawerOpen" @close="isDrawerOpen = false" />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutAppFooter />
  </div>
</template>

<script setup lang="ts">
const isDrawerOpen = ref(false)

useHead({
  bodyAttrs: {
    class: 'bg-surface text-on-surface font-body-md min-h-screen selection:bg-secondary-fixed selection:text-on-secondary-fixed'
  }
})

// Close drawer on route change
const route = useRoute()
watch(() => route.path, () => {
  isDrawerOpen.value = false
})
</script>
