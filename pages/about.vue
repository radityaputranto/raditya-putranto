<template>
  <main class="max-w-container-max mx-auto px-margin-x pt-[160px] pb-32 flex flex-col gap-8 min-h-screen">
    <!-- Profile Header Section -->
    <section class="glass-panel rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden group" v-reveal>
      <!-- Decorative gradient orb -->
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed rounded-full blur-[80px] opacity-30 z-0"></div>
      <div class="flex-shrink-0 relative">
        <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
          <img alt="Raditya Putranto" class="w-full h-full object-cover" src="/profile.jpg">
        </div>
        <div class="absolute bottom-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-white">
          <span class="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
          Available
        </div>
      </div>
      <div class="flex-1 text-center md:text-left z-10">
        <div class="font-label-md text-secondary tracking-widest uppercase mb-4">
          Frontend Developer · Freelance Photographer
        </div>
        <h1 class="font-display text-display text-primary mb-6 leading-tight">
          I'm Raditya Putranto
        </h1>
        <div class="font-body-lg text-on-surface-variant max-w-2xl mb-8 space-y-4 leading-relaxed">
          <p>
            Hello! I'm an experienced Frontend Developer with a deep passion for building intuitive, high-performance web applications. I specialize in modern JavaScript frameworks like Vue.js and Nuxt, blending technical precision with creative design to craft digital experiences that people love to use.
          </p>
          <p>
            Beyond coding, I'm a freelance photographer. This creative outlet sharpens my eye for detail, composition, and visual storytelling—qualities that seamlessly translate into my approach to user interface design. I believe the best digital products are built at the intersection of robust engineering and beautiful aesthetics.
          </p>
        </div>
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <NuxtLink to="/contact" class="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
            <Icon name="material-symbols:mail" />
            Get In Touch
          </NuxtLink>
          <a href="mailto:radityaputranto.works@gmail.com" class="glass-panel font-label-sm text-label-sm text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all flex items-center gap-2 border border-outline-variant/30">
            <Icon name="material-symbols:alternate-email" />
            Email Me
          </a>
          <a href="https://drive.google.com/drive/folders/1_rTESu3_rVYnf1IrqlnSrIceRTO612fr?usp=sharing" target="_blank" class="glass-panel font-label-sm text-label-sm text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all flex items-center gap-2 border border-outline-variant/30">
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
                <h3 class="font-headline-md text-headline-md text-primary">Front End Developer</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">Jan 2019 — Present</span>
              </div>
              <h4 class="font-body-md text-secondary font-semibold mb-4">PT. Wowrack Indonesia</h4>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Developed frontend web applications using Laravel and Vue.js. Maintained cloud applications and developed microservices including DNS Bucket, AWS integration, and Snapshots. Handled main projects like Cloudraya and Neucloud Telkom Indonesia.
              </p>
            </div>
            <!-- Timeline Item 2 -->
            <div class="relative">
              <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-outline-variant z-10"></div>
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <h3 class="font-headline-md text-headline-md text-primary">Freelance Front End Developer</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">Mar 2022 — May 2022</span>
              </div>
              <h4 class="font-body-md text-on-surface-variant font-semibold mb-4">CK BIDAN Sdn. Bhd.</h4>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Developed frontend web application with Bootstrap 4. App developed with Laravel and Vue.js.
              </p>
            </div>
            <!-- Timeline Item 3 -->
            <div class="relative">
              <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-outline-variant z-10"></div>
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <h3 class="font-headline-md text-headline-md text-primary">Freelance Front End Developer</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">Oct 2021 — Dec 2021</span>
              </div>
              <h4 class="font-body-md text-on-surface-variant font-semibold mb-4">Direktorat Jenderal Pajak Banten</h4>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Developed frontend landing page with Bootstrap 4 framework and developed with native CSS.
              </p>
            </div>
            <!-- Timeline Item 4 -->
            <div class="relative">
              <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-outline-variant z-10"></div>
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <h3 class="font-headline-md text-headline-md text-primary">Freelance Front End Developer</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">Aug 2019 — Sep 2019</span>
              </div>
              <h4 class="font-body-md text-on-surface-variant font-semibold mb-4">Greenpeace Indonesia Organization</h4>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Developed landing page with native HTML, CSS, JQuery, and JavaScript. Used GreenShock.js library to create animation and parallax effect.
              </p>
            </div>
            <!-- Timeline Item 5 -->
            <div class="relative">
              <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-outline-variant z-10"></div>
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <h3 class="font-headline-md text-headline-md text-primary">Part Time Front End Developer</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">Oct 2017 — Dec 2017</span>
              </div>
              <h4 class="font-body-md text-on-surface-variant font-semibold mb-4">PT. Telkomsel East Division</h4>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Developed front end web application with HTML, CSS, and Bootstrap 4. Integrated application with PHP native provided from backend.
              </p>
            </div>
            <!-- Timeline Item 6 -->
            <div class="relative">
              <div class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-surface border-[4px] border-outline-variant z-10"></div>
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <h3 class="font-headline-md text-headline-md text-primary">Internship Front End Developer</h3>
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">Aug 2017 — Sep 2017</span>
              </div>
              <h4 class="font-body-md text-on-surface-variant font-semibold mb-4">PT. Meeber Teknologi Indonesia</h4>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Created a web-based application using Laravel for employee attendance monitoring.
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
                <h3 class="font-headline-md text-headline-md text-primary mb-1">Informatic Engineering Bachelor Degree</h3>
                <p class="font-body-md text-secondary font-medium mb-1">Bina Nusantara University</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">2021 - 2023</p>
              </div>
            </div>
            <div class="flex gap-6 p-6 rounded-2xl bg-surface-container-low/30 hover:bg-white/60 transition-all border border-transparent hover:border-outline-variant/10">
              <div class="w-16 h-16 rounded-2xl bg-primary-fixed flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon name="material-symbols:account-balance" class="text-primary text-3xl" />
              </div>
              <div class="flex flex-col justify-center">
                <h3 class="font-headline-md text-headline-md text-primary mb-1">Informatic Engineering Associate Degree</h3>
                <p class="font-body-md text-secondary font-medium mb-1">Politeknik Elektronika Negeri Surabaya</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">2015 - 2018</p>
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
              <h3 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">Frameworks & Libraries</h3>
              <div class="flex flex-wrap gap-2.5">
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Vue.js</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Nuxt.js</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Laravel</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Tailwind CSS</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Bootstrap</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Vuetify</span>
              </div>
            </div>
            <div>
              <h3 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">Core Tech</h3>
              <div class="flex flex-wrap gap-2.5">
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">HTML5 & CSS3</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">JavaScript & SCSS</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">PHP & MySQL</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">REST API & AJAX</span>
              </div>
            </div>
            <div>
              <h3 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">Tools & Design</h3>
              <div class="flex flex-wrap gap-2.5">
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Git & Docker</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">NPM & Composer</span>
                <span class="px-5 py-2 bg-white rounded-full border border-outline-variant/20 font-label-sm text-label-sm text-primary shadow-sm hover:shadow-md transition-shadow">Figma & Adobe XD</span>
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
                <h4 class="font-body-md text-primary font-bold">UX & Web Design Master Course</h4>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Udemy • Oct 2018</p>
              </div>
            </li>
            <li class="flex items-start gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                <Icon name="material-symbols:workspace-premium" class="text-secondary text-[24px]" />
              </div>
              <div>
                <h4 class="font-body-md text-primary font-bold">Developing Database for Info System</h4>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">BNSP • Dec 2017</p>
              </div>
            </li>
            <li class="flex items-start gap-4 group">
              <div class="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                <Icon name="material-symbols:workspace-premium" class="text-secondary text-[24px]" />
              </div>
              <div>
                <h4 class="font-body-md text-primary font-bold">Developing Dynamic Web Application</h4>
                <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">BNSP • Dec 2017</p>
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
