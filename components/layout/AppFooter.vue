<template>
  <footer class="relative mt-section-gap border-t border-outline-variant/20" id="app-footer">
    <div class="bg-primary-container text-white">
      <div class="max-w-container mx-auto px-6 lg:px-8 py-16">
        <!-- 3-Column Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <!-- Brand -->
          <div>
            <h3 class="text-xl font-bold font-heading mb-3">Raditya Putranto</h3>
            <p class="text-primary-fixed-dim text-body-md leading-relaxed mb-6">
              Frontend Developer & Photographer based in Indonesia.
              Building digital experiences with passion and precision.
            </p>
            <UiStatusBadge variant="light" />
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-label-caps font-label uppercase tracking-widest text-primary-fixed-dim mb-6">
              Quick Links
            </h4>
            <nav class="flex flex-col gap-3">
              <NuxtLink
                v-for="link in quickLinks"
                :key="link.path"
                :to="link.path"
                class="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>

          <!-- Social Media -->
          <div>
            <h4 class="text-label-caps font-label uppercase tracking-widest text-primary-fixed-dim mb-6">
              Connect
            </h4>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                  hover:bg-white/20 hover:scale-110 transition-all duration-300"
                :aria-label="social.name"
              >
                <span class="text-sm">{{ social.icon }}</span>
              </a>
            </div>
            <a
              href="mailto:radityaputranto@gmail.com"
              class="inline-block mt-6 text-sm text-primary-fixed-dim hover:text-white transition-colors duration-300"
            >
              radityaputranto@gmail.com
            </a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-primary-fixed-dim">
            &copy; {{ new Date().getFullYear() }} Raditya Putranto. All rights reserved.
          </p>
          <p class="text-xs text-white/40">
            Built with Nuxt.js &amp; ❤️
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Short Notes', path: '/notes' },
  { label: 'About Me', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const socials = [
  { name: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/radityaputranto/' },
  { name: 'GitHub', icon: '⌨', url: 'https://github.com/radityaputranto' },
  { name: 'Instagram', icon: '📷', url: 'https://instagram.com/raditya_putranto' },
  { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/radityaputranto' },
  { name: 'Medium', icon: 'M', url: 'https://medium.com/@radityaputranto' },
  { name: 'Unsplash', icon: '📸', url: 'https://unsplash.com/@raditya_putranto' },
  { name: 'Spotify', icon: '♫', url: 'https://open.spotify.com/user/21ercmyaahviavsid45c74oai' },
]
</script>
