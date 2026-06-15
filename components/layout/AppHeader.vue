<template>
  <nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300" :class="scrolled ? 'shadow-md bg-white/90' : 'shadow-sm bg-white/70'">
    <div class="flex justify-between items-center h-nav-height px-margin-x max-w-container-max mx-auto">
      <!-- Brand -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <span class="text-lg lg:text-xl font-bold text-primary font-display tracking-tight group-hover:text-secondary transition-colors duration-300">
          Raditya Putranto
        </span>
      </NuxtLink>

      <!-- Links (Web) -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.path">
          <NuxtLink 
            :to="link.path" 
            class="transition-colors font-label-sm text-label-sm uppercase tracking-wider"
            :class="isActive(link.path) ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Hamburger (Mobile) -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2 group"
        @click="$emit('toggle-drawer')"
        aria-label="Open menu"
      >
        <span class="block w-6 h-0.5 bg-primary transition-all duration-300 group-hover:bg-secondary" />
        <span class="block w-5 h-0.5 bg-primary transition-all duration-300 group-hover:bg-secondary group-hover:w-6" />
        <span class="block w-4 h-0.5 bg-primary transition-all duration-300 group-hover:bg-secondary group-hover:w-6" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineEmits<{
  'toggle-drawer': []
}>()

const route = useRoute()
const scrolled = ref(false)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Notes', path: '/notes' },
  { label: 'Freebies', path: '/freebies' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
