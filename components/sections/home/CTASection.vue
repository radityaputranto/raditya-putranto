<template>
  <section class="py-section-gap">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <div v-reveal class="glass rounded-glass p-8 lg:p-12 text-center">
        <h2 class="text-headline-md font-heading text-primary mb-4">
          Have a project in mind?
        </h2>
        <p class="text-body-lg text-on-surface-variant mb-8 max-w-md mx-auto">
          Let's work together to bring your ideas to life.
          I'm always open to new opportunities and collaborations.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <UiButtonPrimary to="/contact">
            Let's Talk
          </UiButtonPrimary>
          <UiButtonGlass href="mailto:radityaputranto@gmail.com">
            Email Me
          </UiButtonGlass>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
</script>
