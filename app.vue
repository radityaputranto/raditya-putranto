<template>
  <div id="app">
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
