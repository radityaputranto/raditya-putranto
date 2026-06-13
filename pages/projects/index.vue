<template>
  <main class="max-w-container-max mx-auto px-margin-x pt-[120px] md:pt-[160px] pb-20 min-h-screen">
    <!-- Page Header & Filter -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12" v-reveal>
      <div class="max-w-2xl">
        <h1 class="font-display text-display text-primary mb-4">Selected Works</h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          A curated collection of digital experiences, structural systems, and visual narratives captured over the years.
        </p>
      </div>
      <!-- Filter Segmented Control (Glassmorphism) -->
      <div class="glass-panel p-1 rounded-full flex items-center gap-1">
        <button 
          @click="activeTab = 'development'"
          :class="activeTab === 'development' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/30'"
          class="px-6 py-2.5 rounded-full font-label-sm text-label-sm transition-all duration-300"
        >
          Development
        </button>
        <button 
          @click="activeTab = 'photography'"
          :class="activeTab === 'photography' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest/30'"
          class="px-6 py-2.5 rounded-full font-label-sm text-label-sm transition-all duration-300"
        >
          Photography
        </button>
      </div>
    </div>

    <!-- Development Projects (Grid Layout) -->
    <div v-show="activeTab === 'development'" class="transition-opacity duration-500 animate-fade-in">
      <div class="flex flex-col gap-card-gap">
        <div v-for="(project, index) in projects" :key="project.id" class="glass-panel overflow-hidden group relative flex flex-col hover:shadow-xl transition-all duration-500" :class="index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'" v-reveal>
          <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
            <div class="w-12 h-12 rounded-xl text-on-secondary flex items-center justify-center mb-6 shadow-lg" :class="index % 2 === 0 ? 'bg-secondary' : 'bg-tertiary-fixed !text-on-tertiary-fixed'">
              <Icon :name="index % 2 === 0 ? 'material-symbols:web' : 'material-symbols:layers'" />
            </div>
            <h3 class="font-headline-lg text-headline-lg text-primary mb-4">{{ project.title }}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-3 mb-8">
              <span v-for="tech in project.tech_stack" :key="tech" class="px-4 py-1.5 rounded-full border border-outline-variant/30 font-label-sm text-label-sm text-on-surface-variant">{{ tech }}</span>
            </div>
            <div class="flex flex-wrap gap-4">
              <NuxtLink v-if="project.live_url" :to="project.live_url" target="_blank" class="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-full hover:bg-secondary transition-all w-fit flex items-center gap-2">
                Visit Website
                <Icon name="material-symbols:open-in-new" class="text-[18px]" />
              </NuxtLink>
              <NuxtLink :to="'/projects/' + project.slug" class="border border-outline text-primary font-label-sm text-label-sm px-6 py-3 rounded-full hover:bg-surface-container-highest/30 transition-all w-fit flex items-center gap-2">
                View Details
                <Icon name="material-symbols:arrow-forward" class="text-[18px]" />
              </NuxtLink>
            </div>
          </div>
          <div class="w-full md:w-1/2 bg-surface-container-high/50 relative overflow-hidden min-h-[400px]">
            <NuxtImg :alt="project.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" :src="project.thumbnail_url" />
            <div class="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 to-transparent md:w-1/4" :class="index % 2 !== 0 ? 'bg-gradient-to-l left-auto right-0' : 'bg-gradient-to-r left-0 right-auto'"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Photography Projects (Masonry Layout) -->
    <div v-show="activeTab === 'photography'" class="transition-opacity duration-500 animate-fade-in">
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-card-gap space-y-card-gap">
        <div v-for="photo in photographyMock" :key="photo.title" class="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer glass-panel p-2">
          <img :alt="photo.title" class="w-full rounded-xl object-cover" :src="photo.src">
          <div class="absolute inset-2 rounded-xl bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 backdrop-blur-sm">
            <div class="text-on-primary">
              <p class="font-headline-md text-headline-md mb-1">{{ photo.title }}</p>
              <p class="font-body-md text-body-md opacity-80">{{ photo.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const { projects, fetchProjects } = useProjects()
const activeTab = ref('development')

// Wait for Supabase to fetch
await fetchProjects()

const photographyMock = [
  {
    title: 'Urban Geometries',
    location: 'Tokyo, JP',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFQRzFL1ZxJYZkhkVp-rNzpKSsQtELtAre0iJGkY2-Fm5jK8UT9n25L7jELYp1h8IycY5fIwrF3SOu0yjyn5wE5ga38MVEvbLsvNt99pri5EeFckugmKy7X6LQ19k_lyMuzb5Rq4lyY8jetQjZ5m8_hw_EGv8mDTxkwhB2ucsosZU7hbg4OrnF9UoEsCuL4Cew-8LzlDh6jlgD6EN855UGmVfHBB4lwqX6sKKr7klpI9XrxAqDk-A11JeFVGuKsn0d39LIZUcPrcs'
  },
  {
    title: 'Silence & Light',
    location: 'Studio Space',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbm4BhIKk7PuHFDEzpjxneqicYV7-iGSnr33pX4ZraRpG9oXUL-MmC15mmJNB6Kyx9cGcLPqosYzJR3ICPReaFReBtF9rIecT0MxTyH8qvjb13AoIKmNzwISvgDtDRlOtewKXAn0mTQ0PhBZ5pSDtqDPYdpHyKZaG5rckR_3lxtmfuVy9dH-QEN1LRSkMeIzLXLmiyMyUshi62k7hQhQwSC19t1uyL6ZtXx6Uya5TKwalBhoufp7nkEH6qLO1YBeEIwKyawjJkS9Y'
  },
  {
    title: 'Paper Structures',
    location: 'Experiment',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrfHU66npA_RQg7ekvOxNwnI7FDILOJUl01INMJFGjUsHXYAMj8GTWOVkJ86-hEeyRI06HIkGeEDWrw9GXjCfYvti3P3b3H9MVAiHQ03JZehj9zeOjMoC_W76lBRnXgTgF3RufvXeIzv_s7LyzTcUtc4M5jaAxTCs-qr0uYmmvIxJSlr2l6GaKdbCnNtPsr7D2bfscdpCChZooec7a2f1cH0TlWRop69mct_rtui8q34p4SPmpeEpp8y3qCPRQp1mrfURiHkX1VtU'
  },
  {
    title: 'Glass Facades',
    location: 'New York, NY',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQfmlDvyI4_6kqshC63oE0k0AtUOF_ylbQGkRFZz4Omx1QGzaQTJfoN-DAPOBDthlup7ubdLTW0SDp68YxYywMQ5bBDrdXa9Z9UpIRResqmFI2UD8OjMAgGiuTz14KhqYaTyl4qvI5vHSkQz_oDErKgEylrTzQ_-VzjkiDOq7jr9LSB_IFc4RNMv4099Su3lp6vfxpWwBFFky3Vk0lasjqQQ9zUuRzrb9cNDWtmVTSS7k-X4q6bwxNVk4BGJ9Q18sf0-921YpKzJ8'
  },
  {
    title: 'Natural Patterns',
    location: 'Winter Series',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3Si4Y0QG6B0Lg2UNnkajTbr_bd97yaVEQWQYKZeeUYq4r-Fj0QL4V_WlbSpZYJkHezAL86wDHZjMuYSBbUObTE0yI7rzl2MUTsjsRrjlS7jqpg2bngU6pcWg5E4B3qcMwXIJGwfTTpSXk8LKHfhsI0xrCH3tOUup37ZF6pCmAJ0u7lWqT0-IakzXrJ8L8vfsWI3OP1XSe7O3EhwQ7-ImpxD2u0MEQHfz0SSLP_d5BfoTB0D1jSi5zRIJnqAhsIdeBJBNt3Ibhyyc'
  }
]

useHead({
  title: 'Projects - Raditya Putranto'
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>
