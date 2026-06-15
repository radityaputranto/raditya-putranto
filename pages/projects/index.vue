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
        <!-- Skeleton cards while loading -->
        <template v-if="pending">
          <div v-for="i in 3" :key="'skel-' + i" class="glass-panel overflow-hidden flex flex-col md:flex-row min-h-[400px] animate-pulse">
            <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-4">
              <div class="h-8 w-3/4 rounded-xl skeleton-shimmer" />
              <div class="h-4 w-full rounded-lg skeleton-shimmer" />
              <div class="h-4 w-5/6 rounded-lg skeleton-shimmer" />
              <div class="flex gap-3 mt-4">
                <div class="h-7 w-20 rounded-full skeleton-shimmer" />
                <div class="h-7 w-20 rounded-full skeleton-shimmer" />
              </div>
              <div class="flex gap-4 mt-4">
                <div class="h-10 w-32 rounded-full skeleton-shimmer" />
              </div>
            </div>
            <div class="w-full md:w-1/2 skeleton-shimmer" />
          </div>
        </template>
        <!-- Actual project cards -->
        <template v-else>
          <div v-for="(project, index) in projects" :key="project.id" v-reveal>
            <UiProjectCard :project="project" :index="index" :show-visit-button="true" />
          </div>
        </template>
      </div>
    </div>

    <!-- Photography Projects (Masonry Layout) -->
    <div v-show="activeTab === 'photography'" class="transition-opacity duration-500 animate-fade-in">
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-card-gap space-y-card-gap">
        <div
          v-for="photo in photographyMock"
          :key="photo.title"
          class="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer glass-panel p-2"
        >
          <!-- Skeleton while image loads -->
          <div
            v-if="!loadedPhotos.has(photo.src)"
            class="w-full rounded-xl skeleton-shimmer"
            style="aspect-ratio: 4/3"
          />
          <img
            :alt="photo.title"
            class="w-full rounded-xl object-cover transition-opacity duration-500"
            :class="loadedPhotos.has(photo.src) ? 'opacity-100' : 'opacity-0 absolute inset-2'"
            :src="photo.src"
            loading="lazy"
            @load="loadedPhotos.add(photo.src)"
          >
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
const loadedPhotos = reactive(new Set<string>())

// Static data is loaded instantly, pending is always false
const { pending } = useLazyAsyncData('all-projects', async () => {
  await fetchProjects()
  return true
})

const photographyMock = [
  {
    title: 'Capture 01',
    location: 'Photography',
    src: '/images/photography/photo-01.jpg'
  },
  {
    title: 'Capture 02',
    location: 'Photography',
    src: '/images/photography/photo-02.jpg'
  },
  {
    title: 'Capture 03',
    location: 'Photography',
    src: '/images/photography/photo-03.jpg'
  },
  {
    title: 'Capture 04',
    location: 'Photography',
    src: '/images/photography/photo-04.jpg'
  },
  {
    title: 'Capture 05',
    location: 'Photography',
    src: '/images/photography/photo-05.jpg'
  },
  {
    title: 'Capture 06',
    location: 'Photography',
    src: '/images/photography/photo-06.jpg'
  },
  {
    title: 'Capture 07',
    location: 'Photography',
    src: '/images/photography/photo-07.jpg'
  },
  {
    title: 'Capture 08',
    location: 'Photography',
    src: '/images/photography/photo-08.jpg'
  },
  {
    title: 'Capture 09',
    location: 'Photography',
    src: '/images/photography/photo-09.jpg'
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

.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    hsl(var(--md-sys-color-surface-container) / 0.5) 25%,
    hsl(var(--md-sys-color-surface-container-high) / 0.8) 50%,
    hsl(var(--md-sys-color-surface-container) / 0.5) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.6s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
