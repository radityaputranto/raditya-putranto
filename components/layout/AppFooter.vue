<template>
  <footer class="w-full py-12 border-t border-white/20 bg-white/50 backdrop-blur-md">
    <div class="flex flex-col md:flex-row justify-between items-center px-margin-x max-w-container-max mx-auto gap-gutter">
      <!-- Brand / Copyright -->
      <div class="flex flex-col gap-2 items-center md:items-start opacity-80 hover:opacity-100 transition-opacity">
        <span class="font-display text-headline-md font-bold text-primary">Raditya Putranto</span>
        <span class="font-body-md text-body-md text-on-surface-variant">© {{ new Date().getFullYear() }} Creative Portfolio. All rights reserved.</span>
      </div>
      <!-- Social Links -->
      <ul class="flex items-center gap-6">
        <li>
          <a class="text-on-surface-variant hover:text-primary transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Icon name="mdi:instagram" class="text-2xl" />
          </a>
        </li>
        <li>
          <a class="text-on-surface-variant hover:text-primary transition-colors" href="https://linkedin.com/in/raditya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon name="mdi:linkedin" class="text-2xl" />
          </a>
        </li>
        <li>
          <a class="text-on-surface-variant hover:text-primary transition-colors" href="https://dribbble.com/raditya" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
            <Icon name="mdi:dribbble" class="text-2xl" />
          </a>
        </li>
        <li>
          <a class="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/raditya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon name="mdi:github" class="text-2xl" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
