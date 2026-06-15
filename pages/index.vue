<template>
  <main class="max-w-container-max mx-auto px-margin-x pt-[160px] pb-32 flex flex-col gap-[120px]">
    <!-- Hero Section -->
    <section class="flex flex-col md:flex-row items-center gap-16 relative">
      <div class="flex-1 space-y-8 z-10" v-reveal>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-tertiary-fixed/40 bg-surface-container-lowest/40 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          <span class="w-2 h-2 rounded-full bg-tertiary-fixed shadow-[0_0_8px_rgba(98,250,227,0.8)] animate-pulse"></span>
          Available for work
        </div>
        <h1 class="font-display text-display text-primary leading-tight max-w-[800px]">
          I'm Raditya Putranto
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A Full-time Frontend Developer and Freelance Photographer blending technical precision with artistic vision to create high-fidelity digital experiences and compelling visual narratives.
        </p>
        <div class="flex flex-wrap items-center gap-4 pt-4">
          <NuxtLink to="/contact" class="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
            <Icon name="material-symbols:mail" />
            Get In Touch
          </NuxtLink>
          <NuxtLink to="/projects" class="glass-panel font-label-sm text-label-sm text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all flex items-center gap-2 group">
            View Projects
            <Icon name="material-symbols:arrow-forward" class="transition-transform duration-300 group-hover:translate-x-1" />
          </NuxtLink>
        </div>
      </div>
      <div class="flex-1 w-full flex justify-center md:justify-end relative mt-12 md:mt-24" v-reveal="{ delay: 200 }">
        <UiProfileAvatar />
      </div>
    </section>

    <!-- What I Do Section -->
    <section class="space-y-12" v-reveal>
      <h2 class="font-headline-lg text-headline-lg text-primary">What I Do</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-card-gap">
        <!-- Card 1 -->
        <div class="glass-panel p-10 flex flex-col h-full group hover:bg-white/80 transition-all duration-500">
          <div class="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <Icon name="material-symbols:code-blocks" class="text-4xl text-primary" />
          </div>
          <h3 class="font-headline-md text-headline-md text-primary mb-4">Full-time Frontend Developer</h3>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Specializing in building high-performance, scalable web applications with modern tech stacks like React, Vue, and Tailwind CSS. I focus on creating seamless user experiences and robust frontend architectures.
          </p>
        </div>
        <!-- Card 2 -->
        <div class="glass-panel p-10 flex flex-col h-full group hover:bg-white/80 transition-all duration-500">
          <div class="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <Icon name="material-symbols:camera" class="text-4xl text-primary" />
          </div>
          <h3 class="font-headline-md text-headline-md text-primary mb-4">Freelance Photographer</h3>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Capturing visual stories through digital and analog photography. I specialize in architectural, street, and brand photography, blending technical precision with artistic vision.
          </p>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="space-y-12 max-w-3xl" v-reveal>
      <h2 class="font-headline-lg text-headline-lg text-primary">Experience</h2>
      <div class="relative border-l border-outline-variant/30 pl-8 ml-4 space-y-12 py-4">
        <!-- Timeline Item -->
        <div class="relative">
          <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-primary shadow-sm z-10"></div>
          <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
            <h4 class="font-headline-md text-headline-md text-primary">Front End Developer</h4>
            <span class="hidden md:block w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Jan 2019 — Present</span>
          </div>
          <p class="font-body-md text-body-md text-primary/70 font-medium mb-3">PT. Wowrack Indonesia</p>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Developed frontend web applications using Laravel and Vue.js framework. Maintained cloud applications and developed microservices including DNS Bucket, AWS integration, and Snapshots. Handled projects like Cloudraya and Neucloud Telkom Indonesia.
          </p>
        </div>
        <!-- Timeline Item -->
        <div class="relative">
          <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-outline-variant z-10"></div>
          <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
            <h4 class="font-headline-md text-headline-md text-primary">Freelance Front End Developer</h4>
            <span class="hidden md:block w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mar 2022 — May 2022</span>
          </div>
          <p class="font-body-md text-body-md text-primary/70 font-medium mb-3">CK BIDAN Sdn. Bhd.</p>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Developed the CK Mama Panel frontend web application using Laravel, Vue.js, and Bootstrap 4, allowing customers to order and pay for childbirth and baby care services.
          </p>
        </div>
      </div>
    </section>

    <!-- Selected Works -->
    <section class="space-y-12" v-reveal>
      <div class="flex flex-col md:flex-row justify-between items-baseline gap-6">
        <h2 class="font-headline-lg text-headline-lg text-primary">Selected Works</h2>
        <NuxtLink class="font-label-sm text-label-sm text-primary hover:text-secondary transition-colors uppercase tracking-widest flex items-center gap-1 group" to="/projects">
          View All Works <Icon name="material-symbols:arrow-forward" class="text-[16px] transition-transform duration-300 group-hover:translate-x-1" />
        </NuxtLink>
      </div>
      
      <div class="flex flex-col gap-card-gap">
        <div v-for="(project, index) in featuredProjects" :key="project.id" v-reveal="{ delay: index * 100 }">
          <UiProjectCard :project="project" :index="index" :show-visit-button="false" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const { featuredProjects } = useProjects()

useHead({
  title: 'Raditya Putranto - Portfolio'
})
</script>
