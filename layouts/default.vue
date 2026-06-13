<template>
  <div class="min-h-screen flex flex-col">
    <LayoutAppHeader @toggle-drawer="drawerOpen = true" />
    <LayoutMobileDrawer :open="drawerOpen" @close="drawerOpen = false" />

    <!-- Main Content -->
    <main class="flex-1 pt-20 lg:pt-24">
      <slot />
    </main>

    <LayoutAppFooter />
  </div>
</template>

<script setup lang="ts">
const drawerOpen = ref(false)

// Close drawer on route change
const route = useRoute()
watch(() => route.path, () => {
  drawerOpen.value = false
})
</script>
