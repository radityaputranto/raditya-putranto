<template>
  <header
    ref="headerEl"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth"
    :class="scrolled ? 'glass-nav shadow-nav' : 'bg-transparent'"
  >
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group" id="header-logo">
          <span class="text-lg lg:text-xl font-bold text-primary font-heading tracking-tight group-hover:text-secondary transition-colors duration-300">
            Raditya Putranto
          </span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1" id="header-nav-desktop">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link"
            :class="{ 'nav-link-active': isActive(link.path) }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Status Badge (Desktop) -->
        <div class="hidden lg:block">
          <UiStatusBadge />
        </div>

        <!-- Hamburger (Mobile) -->
        <button
          class="lg:hidden flex flex-col gap-1.5 p-2 group"
          @click="$emit('toggle-drawer')"
          aria-label="Open menu"
          id="header-hamburger"
        >
          <span class="block w-6 h-0.5 bg-primary transition-all duration-300 group-hover:bg-secondary" />
          <span class="block w-5 h-0.5 bg-primary transition-all duration-300 group-hover:bg-secondary group-hover:w-6" />
          <span class="block w-4 h-0.5 bg-primary transition-all duration-300 group-hover:bg-secondary group-hover:w-6" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineEmits<{
  'toggle-drawer': []
}>()

const route = useRoute()
const headerEl = ref<HTMLElement | null>(null)
const scrolled = ref(false)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Notes', path: '/notes' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
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

<style scoped>
.nav-link {
  @apply relative px-4 py-2 text-sm font-medium text-on-surface-variant rounded-full
    transition-all duration-300 ease-smooth
    hover:text-primary hover:bg-primary/5;
}

.nav-link-active {
  @apply text-primary bg-primary/[0.08] font-semibold;
}

/* Underline slide-in animation */
.nav-link::after {
  content: '';
  @apply absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary rounded-full
    transition-all duration-300 ease-smooth;
}

.nav-link:hover::after,
.nav-link-active::after {
  @apply w-5;
}
</style>
