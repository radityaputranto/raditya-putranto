<template>
  <div class="blob-container" aria-hidden="true">
    <div class="blob blob-1 animate-blob-1" />
    <div class="blob blob-2 animate-blob-2" />
    <div class="blob blob-3 animate-blob-3" />
    <div class="blob blob-4 animate-blob-4" />
  </div>
</template>

<script setup lang="ts">
// Purely decorative — no props needed
</script>

<style scoped>
.blob-container {
  @apply fixed inset-0 -z-10 overflow-hidden pointer-events-none;
}

.blob {
  @apply absolute rounded-full;
  mix-blend-mode: multiply;
  filter: blur(70px);
  opacity: 0.45;
}

.blob-1 {
  @apply w-[500px] h-[500px];
  background: radial-gradient(circle, rgba(186, 197, 238, 0.6) 0%, rgba(186, 197, 238, 0) 70%);
  top: 5%;
  left: 25%;
}

.blob-2 {
  @apply w-[450px] h-[450px];
  background: radial-gradient(circle, rgba(158, 194, 254, 0.5) 0%, rgba(158, 194, 254, 0) 70%);
  top: 30%;
  right: 15%;
}

.blob-3 {
  @apply w-[400px] h-[400px];
  background: radial-gradient(circle, rgba(213, 227, 255, 0.55) 0%, rgba(213, 227, 255, 0) 70%);
  bottom: 20%;
  left: 10%;
}

.blob-4 {
  @apply w-[350px] h-[350px];
  background: radial-gradient(circle, rgba(218, 226, 255, 0.4) 0%, rgba(218, 226, 255, 0) 70%);
  top: 60%;
  right: 35%;
}

/* Responsive blob sizes */
@media (max-width: 768px) {
  .blob-1 { @apply w-[300px] h-[300px]; }
  .blob-2 { @apply w-[260px] h-[260px]; }
  .blob-3 { @apply w-[240px] h-[240px]; }
  .blob-4 { @apply w-[200px] h-[200px]; }
}
</style>
