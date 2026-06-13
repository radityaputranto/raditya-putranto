<template>
  <section class="relative py-16 lg:py-24">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Text Content -->
        <div v-reveal>
          <UiStatusBadge class="mb-6" />

          <div class="mb-6">
            <p class="text-body-lg text-on-surface-variant mb-2">
              <span ref="greetingEl" class="typing-cursor">{{ currentGreeting }}</span>
            </p>
            <h1 class="text-display-lg-mobile lg:text-display-lg font-heading text-primary leading-tight">
              I'm <span class="text-secondary">Raditya</span> Putranto
            </h1>
          </div>

          <p class="text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-lg">
            A passionate <strong class="text-primary">Frontend Developer</strong> &amp;
            <strong class="text-primary">Photographer</strong> based in Indonesia.
            Crafting digital experiences with clean code and creative vision.
          </p>

          <div class="flex flex-wrap gap-3">
            <UiButtonPrimary to="/projects">
              View Projects
            </UiButtonPrimary>
            <UiButtonGlass to="/contact">
              Get in Touch
            </UiButtonGlass>
          </div>
        </div>

        <!-- Profile Image -->
        <div v-reveal="2" class="flex justify-center lg:justify-end">
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-primary-fixed/30 to-secondary-container/20 rounded-full blur-2xl animate-float" />
            <img
              src="~/assets/img/memoji.png"
              alt="Raditya Putranto"
              class="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white/80 shadow-glass-hover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()

const greetings = ['Hello!', 'Bonjour', 'Guten tag', 'こんにちは', 'مرحبًا', '你好', 'Halo!']
const currentGreeting = ref(greetings[0])
let greetingIndex = 0

onMounted(() => {
  setInterval(() => {
    greetingIndex = (greetingIndex + 1) % greetings.length
    currentGreeting.value = greetings[greetingIndex]
  }, 3000)
})
</script>
