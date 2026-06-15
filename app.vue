<template>
  <div id="app">
    <UiLoadingScreen />
    <NuxtLoadingIndicator color="#62fae3" :height="3" />
    <DecorationBlobBackground />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — Raditya Putranto` : 'Raditya Putranto — Frontend Developer & Photographer'
  },
})
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
}
</style>
