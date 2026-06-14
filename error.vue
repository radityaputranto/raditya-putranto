<template>
  <NuxtLayout>
    <main class="min-h-screen flex flex-col items-center justify-center px-margin-x text-center bg-surface pt-32 pb-24">
      <div class="max-w-2xl mx-auto w-full flex flex-col items-center glass-panel rounded-[3rem] p-8 md:p-16 relative overflow-hidden animate-fade-in">
        <div class="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
        <div class="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>

        <!-- Illustration -->
        <div class="w-64 h-64 md:w-80 md:h-80 mb-8 relative z-10 rounded-full overflow-hidden border-8 border-white/50 shadow-2xl">
          <img src="/404-illustration.png" :alt="is404 ? 'Lost in Space - 404 Error' : 'System Error'" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
        </div>

        <h1 class="font-display text-display text-primary mb-6 relative z-10 leading-tight">
          Oops! <br class="md:hidden" />{{ is404 ? 'Page Not Found' : 'Server Error' }}
        </h1>
        
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mb-10 relative z-10 leading-relaxed">
          {{ errorDescription }}
        </p>
        
        <button @click="handleError" class="relative z-10 bg-primary text-on-primary font-label-md text-label-md px-10 h-14 rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 active:scale-95 group">
          <Icon name="material-symbols:home-app-logo" class="text-xl group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

const is404 = computed(() => props.error?.statusCode === 404)

const errorTitle = computed(() => {
  return is404.value ? 'Page Not Found' : 'Server Error'
})

const errorDescription = computed(() => {
  return is404.value 
    ? "It seems you've drifted off course. The page you're looking for doesn't exist or has been moved to another dimension."
    : "Something went wrong on our end or an unexpected error occurred. We're working on fixing it, please try again later."
})

useHead({
  title: computed(() => `${props.error?.statusCode || 'Error'} - ${errorTitle.value} | Raditya Putranto`)
})
</script>
