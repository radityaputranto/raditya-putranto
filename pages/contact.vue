<template>
  <div>
    <div class="max-w-container mx-auto px-6 lg:px-8 pt-8 lg:pt-16">
      <UiSectionHeading
        v-reveal
        label="Get in Touch"
        subtitle="I'd love to hear from you. Send me a message and I'll respond as soon as possible."
      >
        Contact
      </UiSectionHeading>
    </div>
    <SectionsContactForm />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Contact' })
const { vReveal } = useScrollReveal()
</script>
