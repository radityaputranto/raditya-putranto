<template>
  <div class="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] flex items-center justify-center">
    <!-- Floating Icons Orbit Container -->
    <div class="absolute inset-0 z-20 pointer-events-none animate-[spin_60s_linear_infinite]">
      <div 
        v-for="(icon, index) in icons" 
        :key="index"
        class="absolute left-1/2 top-1/2 -ml-7 -mt-7 md:-ml-8 md:-mt-8 pointer-events-auto"
        :style="{ transform: `rotate(${index * (360 / icons.length)}deg)` }"
      >
        <div class="orbit-distance">
          <div class="animate-[spin_60s_linear_infinite_reverse]">
            <div :style="{ transform: `rotate(-${index * (360 / icons.length)}deg)` }">
               
              <!-- Hover Interaction Wrapper -->
              <div 
                class="transition-transform duration-1000 ease-out cursor-pointer"
                :style="{ transform: `translate(${icon.offsetX}px, ${icon.offsetY}px)` }"
                @mouseenter="moveIcon(index)"
              >
                <div class="w-14 h-14 md:w-16 md:h-16 bg-white/90 rounded-2xl shadow-lg border border-white/50 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Icon :name="icon.name" class="text-3xl md:text-4xl" :class="icon.colorClass" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Avatar -->
    <div class="w-full h-full rounded-full bg-[#E5E5EA] border-[8px] md:border-[12px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden relative z-10 pointer-events-none">
      <NuxtImg alt="Raditya Putranto Avatar" class="w-full h-full object-cover" src="/profile.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const icons = ref([
  { name: 'logos:vue', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'logos:react', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'logos:javascript', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'logos:typescript-icon', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'logos:tailwindcss-icon', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'logos:nuxt-icon', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'logos:nextjs-icon', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'logos:laravel', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'vscode-icons:file-type-photoshop', colorClass: '', offsetX: 0, offsetY: 0 },
  { name: 'simple-icons:adobelightroom', colorClass: 'text-[#31A8FF]', offsetX: 0, offsetY: 0 },
  { name: 'logos:figma', colorClass: '', offsetX: 0, offsetY: 0 },
])

const moveIcon = (index: number) => {
  // Cegah trigger ganda jika animasi masih berjalan agar pergerakannya smooth
  if (icons.value[index].offsetX !== 0 || icons.value[index].offsetY !== 0) return

  // Pergerakan acak ke arah luar secara halus
  const signX = Math.random() > 0.5 ? 1 : -1
  const signY = Math.random() > 0.5 ? 1 : -1
  const randomX = signX * (20 + Math.random() * 20)
  const randomY = signY * (20 + Math.random() * 20)
  
  icons.value[index].offsetX = randomX
  icons.value[index].offsetY = randomY
  
  // Kembali ke posisi semula secara perlahan setelah 1.5 detik
  setTimeout(() => {
    icons.value[index].offsetX = 0
    icons.value[index].offsetY = 0
  }, 1500)
}
</script>

<style scoped>
.orbit-distance {
  /* Jarak ikon dari pusat gambar profil (mobile) */
  transform: translateY(-170px);
}
@media (min-width: 768px) {
  .orbit-distance {
    /* Jarak ikon dari pusat gambar profil (desktop) -> sedikit lebih lebar dari sebelumnya */
    transform: translateY(-220px);
  }
}
</style>
