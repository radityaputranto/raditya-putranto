<template>
  <!-- Backdrop -->
  <Transition name="fade">
    <div v-if="open" class="backdrop-dim" @click="$emit('close')" />
  </Transition>

  <!-- Drawer -->
  <Transition name="slide-drawer">
    <div
      v-if="open"
      class="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 glass bg-white/90 shadow-2xl"
      id="mobile-drawer"
    >
      <div class="flex flex-col h-full">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-5 border-b border-outline-variant/20">
          <span class="font-bold text-primary font-heading">Menu</span>
          <button
            @click="$emit('close')"
            class="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors"
            aria-label="Close menu"
          >
            <span class="text-xl text-on-surface-variant">✕</span>
          </button>
        </div>

        <!-- Nav Links -->
        <nav class="flex-1 px-4 py-6 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant font-medium
              transition-all duration-300 hover:bg-primary/5 hover:text-primary"
            :class="{ 'bg-primary/[0.08] text-primary font-semibold': isActive(link.path) }"
            @click="$emit('close')"
          >
            <span class="text-lg">{{ link.icon }}</span>
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Footer -->
        <div class="px-6 py-5 border-t border-outline-variant/20">
          <UiStatusBadge />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()

const route = useRoute()

const navLinks = [
  { label: 'Home', path: '/', icon: '🏠' },
  { label: 'Projects', path: '/projects', icon: '💼' },
  { label: 'Notes', path: '/notes', icon: '📝' },
  { label: 'About', path: '/about', icon: '👤' },
  { label: 'Contact', path: '/contact', icon: '✉️' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-drawer-enter-active {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-drawer-leave-active {
  transition: transform 0.25s ease-in;
}
.slide-drawer-enter-from,
.slide-drawer-leave-to {
  transform: translateX(100%);
}
</style>
