<template>
  <div class="py-8 lg:py-16">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <!-- Hero -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-section-gap">
        <div v-reveal>
          <UiSectionHeading label="About Me">
            Frontend Developer &amp; Photographer
          </UiSectionHeading>
          <p class="text-body-lg text-on-surface-variant leading-relaxed mb-6">
            Hi, I'm <strong class="text-primary">Raditya Putranto</strong>, a passionate frontend developer
            and photographer based in Indonesia. I specialize in building modern, performant web applications
            using Vue.js, Nuxt.js, and the latest web technologies.
          </p>
          <p class="text-body-md text-on-surface-variant leading-relaxed mb-8">
            When I'm not coding, you can find me behind a camera capturing moments in landscape and
            street photography. I believe that the intersection of technology and art creates the
            most impactful experiences.
          </p>
          <div class="flex flex-wrap gap-3">
            <UiButtonPrimary to="/contact">Get in Touch</UiButtonPrimary>
            <UiButtonGlass href="https://drive.google.com/file/d/1TDHNGakzSabEnJYdLIDhwrYQhN81rGB6/view" target="_blank">
              📄 Download CV
            </UiButtonGlass>
          </div>
        </div>

        <div v-reveal="2" class="flex justify-center">
          <div class="relative">
            <div class="absolute -inset-6 bg-gradient-to-br from-secondary/20 via-primary-fixed/20 to-secondary-container/20 rounded-3xl blur-2xl" />
            <img
              src="~/assets/img/memoji.png"
              alt="Raditya Putranto"
              class="relative w-56 h-56 lg:w-72 lg:h-72 rounded-3xl object-cover border-4 border-white/80 shadow-glass-hover"
            />
          </div>
        </div>
      </div>

      <!-- Experience Timeline -->
      <section v-reveal class="mb-section-gap">
        <UiSectionHeading label="Experience" subtitle="My professional journey so far.">
          Work History
        </UiSectionHeading>

        <div class="space-y-6">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.company"
            v-reveal="index + 1"
            class="glass-card-interactive relative !p-6 lg:!p-8"
          >
            <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
              <div>
                <h3 class="text-lg font-heading font-semibold text-primary">{{ exp.role }}</h3>
                <p class="text-secondary font-medium">{{ exp.company }}</p>
              </div>
              <span class="text-sm text-on-surface-variant font-label whitespace-nowrap">{{ exp.period }}</span>
            </div>
            <p class="text-sm text-on-surface-variant leading-relaxed">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <UiChipTag v-for="tech in exp.tech" :key="tech">{{ tech }}</UiChipTag>
            </div>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section v-reveal>
        <UiSectionHeading label="Education">
          Academic Background
        </UiSectionHeading>

        <div class="glass-card !p-6 lg:!p-8">
          <h3 class="text-lg font-heading font-semibold text-primary">Bachelor of Computer Science</h3>
          <p class="text-secondary font-medium">University</p>
          <p class="text-sm text-on-surface-variant mt-2">Focused on Software Engineering and Web Technologies.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'About' })
const { vReveal } = useScrollReveal()

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tech Company',
    period: '2023 — Present',
    description: 'Building modern web applications with Vue.js and Nuxt.js. Responsible for frontend architecture, UI/UX implementation, and performance optimization.',
    tech: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    role: 'Web Developer',
    company: 'Digital Agency',
    period: '2021 — 2023',
    description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.',
    tech: ['Vue.js', 'JavaScript', 'CSS', 'REST API'],
  },
  {
    role: 'Junior Developer',
    company: 'Startup',
    period: '2020 — 2021',
    description: 'Started my career building frontend components and learning modern web development practices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
]
</script>
