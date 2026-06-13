<template>
  <main class="max-w-container-max mx-auto px-margin-x pt-[160px] pb-32 flex flex-col gap-8 min-h-screen">
    <!-- Profile Header Section -->
    <section class="glass-panel rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden group" v-reveal>
      <!-- Decorative gradient orb -->
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed rounded-full blur-[80px] opacity-30 z-0"></div>
      <div class="flex-shrink-0 relative">
        <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
          <img alt="Raditya Putranto" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLthzjIV6pD3G82oisWAN5TTSfzsE6GJJOWfkKmMjUg19K8rMV8-KlGaNkYDyrf-b-0oPjDq62fM5B-z6ncCDHbK7G_U2MsF4BpEo7cVU4poFe7xX_Kux5u4xSIVnQYdU8phD_0myH2MfjQl-4VYb_qF2EBnbfHBXHcio8mEiBbna5arq_Ft0sFejeEtOcF5qkmrvYBu6vEIjfcS_9CetnZnYpIhjW142wx_28LuF2pxGxuN4ysCcrl2Lg">
        </div>
        <div class="absolute bottom-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-white">
          <span class="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
          Available
        </div>
      </div>
      <div class="flex-1 text-center md:text-left z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">
          Full-time Frontend Developer &amp; Freelance Photographer
        </div>
        <h1 class="font-display text-display text-primary mb-6 leading-tight">
          I'm Raditya Putranto
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
          A Full-time Frontend Developer and Freelance Photographer blending technical precision with artistic vision to create high-fidelity digital experiences and compelling visual narratives.
        </p>
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <NuxtLink to="/contact" class="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
            <Icon name="material-symbols:mail" />
            Get In Touch
          </NuxtLink>
          <a href="#" class="glass-panel font-label-sm text-label-sm text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all flex items-center gap-2 border border-outline-variant/30">
            <Icon name="material-symbols:download" />
            Download CV
          </a>
        </div>
      </div>
    </section>

    <!-- Two Column Layout for Details -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-card-gap">
      <!-- Left Column: Experience & Education -->
      <div class="lg:col-span-2 space-y-card-gap">
        <!-- Experience Timeline -->
        <section class="glass-panel rounded-[2rem] p-10 md:p-12" v-reveal="1">
          <div class="flex items-center gap-3 mb-10 pb-6 border-b border-outline-variant/20">
            <Icon name="material-symbols:work-history" class="text-primary text-3xl" />
            <h2 class="font-headline-lg text-headline-lg text-primary">Experience</h2>
          </div>
          <div class="relative border-l border-outline-variant/30 pl-8 ml-4 space-y-12">
            <!-- Timeline Item 1 -->
            <div class="relative">
              <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-primary shadow-sm z-10"></div>
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <h3 class="font-headline-md text-headline-md text-primary">Senior Frontend Engineer</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">2021 — Present</span>
              </div>
              <h4 class="font-body-md text-secondary font-semibold mb-4">Tech Innovators Inc.</h4>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Leading the core UI architecture team. Restructured the component library resulting in a 40% reduction in deployment times and a significantly more cohesive design language across all product verticals.
              </p>
            </div>
            <!-- Timeline Item 2 -->
            <div class="relative">
              <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-outline-variant z-10"></div>
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <h3 class="font-headline-md text-headline-md text-primary">Creative Developer</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">2018 — 2021</span>
              </div>
              <h4 class="font-body-md text-on-surface-variant font-semibold mb-4">Studio Rectangle</h4>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Bridged the gap between design and engineering. Delivered award-winning promotional micro-sites leveraging WebGL and advanced CSS animations for high-profile client campaigns.
              </p>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="glass-panel rounded-[2rem] p-10 md:p-12" v-reveal="2">
          <div class="flex items-center gap-3 mb-10 pb-6 border-b border-outline-variant/20">
            <Icon name="material-symbols:school" class="text-primary text-3xl" />
            <h2 class="font-headline-lg text-headline-lg text-primary">Education</h2>
          </div>
          <div class="space-y-6">
            <div class="flex gap-6 p-6 rounded-2xl bg-surface-container-low/30 hover:bg-white/60 transition-all border border-transparent hover:border-outline-variant/10">
              <div class="w-16 h-16 rounded-2xl bg-primary-fixed flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon name="material-symbols:account-balance" class="text-primary text-3xl" />
              </div>
              <div class="flex flex-col justify-center">
                <h3 class="font-headline-md text-headline-md text-primary mb-1">Bachelor of Arts in Design</h3>
                <p class="font-body-md text-secondary font-medium mb-1">University of Technology</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">2012 - 2016</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Right Column: Skills & Info -->
      <div class="space-y-card-gap">
        <!-- Skills Arsenal -->
        <section class="glass-panel rounded-[2rem] p-10" v-reveal="3">
          <div class="flex items-center gap-3 mb-10 pb-6 border-b border-outline-variant/20">
            <Icon name="material-symbols:build" class="text-primary text-3xl" />
            <h2 class="font-headline-lg text-headline-lg text-primary">Arsenal</h2>
          </div>
          <div class="space-y-10">
            <div>
              <h3 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">Design</h3>
              <div class="flex flex-wrap gap-2.5">
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Figma</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Prototyping</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Design Systems</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Interaction</span>
              </div>
            </div>
            <div>
              <h3 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">Research</h3>
              <div class="flex flex-wrap gap-2.5">
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm">Testing</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm">Interviews</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm">Mapping</span>
              </div>
            </div>
            <div>
              <h3 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">Tools</h3>
              <div class="flex flex-wrap gap-2.5">
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm">Vue.js</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm">Nuxt</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Certifications -->
        <section class="glass-panel rounded-[2rem] p-10" v-reveal="4">
          <div class="flex items-center gap-3 mb-10 pb-6 border-b border-outline-variant/20">
            <Icon name="material-symbols:verified" class="text-primary text-3xl" />
            <h2 class="font-headline-lg text-headline-lg text-primary">Certificates</h2>
          </div>
          <ul class="space-y-6">
            <li class="flex items-start gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                <Icon name="material-symbols:workspace-premium" class="text-secondary text-[24px]" />
              </div>
              <div>
                <h4 class="font-body-md text-primary font-bold">Google UX Design</h4>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Coursera • 2021</p>
              </div>
            </li>
            <li class="flex items-start gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                <Icon name="material-symbols:workspace-premium" class="text-secondary text-[24px]" />
              </div>
              <div>
                <h4 class="font-body-md text-primary font-bold">HCI Specialist</h4>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">IxDF • 2019</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()

useHead({
  title: 'About - Raditya Putranto'
})
</script>
