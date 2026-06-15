<template>
  <footer class="w-full py-12 border-t border-white/20 bg-white/50 backdrop-blur-md">
    <div class="flex flex-col md:flex-row justify-between items-center px-margin-x max-w-container-max mx-auto gap-gutter">
      <!-- Brand / Copyright -->
      <div class="flex flex-col gap-2 items-center md:items-start opacity-80 hover:opacity-100 transition-opacity">
        <span class="font-display text-headline-md font-bold text-primary">Raditya Putranto</span>
        <span class="font-body-md text-body-md text-on-surface-variant">© {{ new Date().getFullYear() }}. All rights reserved.</span>
      </div>
      <!-- Social Links -->
      <ul class="flex flex-wrap items-center justify-center md:justify-end gap-6">
        <li v-for="social in socials" :key="social.name">
          <a :class="['text-on-surface-variant transition-colors', social.hoverColor]" :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.name">
            <Icon :name="social.icon" class="text-2xl" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/radityaputranto/', hoverColor: 'hover:text-[#0A66C2]' },
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/radityaputranto', hoverColor: 'hover:text-black' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/raditya_putranto/', hoverColor: 'hover:text-[#E1306C]' },
  { name: 'YouTube', icon: 'mdi:youtube', url: 'https://www.youtube.com/@raditya_putranto', hoverColor: 'hover:text-[#FF0000]' },
  { name: 'Twitter', icon: 'mdi:twitter', url: 'https://x.com/radityaputranto', hoverColor: 'hover:text-black' },
  { name: 'Behance', icon: 'mdi:behance', url: 'https://www.behance.net/radityaputranto', hoverColor: 'hover:text-[#0057ff]' },
  { name: 'Dribbble', icon: 'mdi:dribbble', url: 'https://dribbble.com/raditya_putranto', hoverColor: 'hover:text-[#ea4c89]' }
]
</script>
