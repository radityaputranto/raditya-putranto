<template>
  <main class="pt-32 pb-24 px-margin-x max-w-container-max mx-auto min-h-screen">
    <!-- Header Section -->
    <header class="text-center max-w-4xl mx-auto mb-10" v-reveal>
      <h1 class="font-display text-display text-primary mb-6">Get in Touch</h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-4">
        Whether you have a project in mind or just want to say hi, I'd love to hear from you.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-body-md text-on-surface-variant mb-8">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:location-on" class="text-xl text-primary" />
          <span>Surabaya, Indonesia</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:mail" class="text-xl text-primary" />
          <a href="mailto:radityaputranto.works@gmail.com" class="hover:text-primary transition-colors">radityaputranto.works@gmail.com</a>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" :title="social.name" class="glass-panel p-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-surface-container-lowest group border border-outline-variant/30">
          <Icon :name="social.icon" :class="['text-xl text-secondary transition-colors', social.hoverColor]" />
          <span class="font-label-sm text-label-sm text-on-surface hidden sm:block">{{ social.name }}</span>
        </a>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4" v-reveal="1">
      <!-- Send a Message -->
      <div class="lg:col-span-8 lg:col-start-3">
        <div class="glass-panel p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
          <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
          
          <div v-if="!isSubmitted" class="relative z-10 animate-fade-in">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-6">Send a Message</h2>
            
            <UiAlert v-if="errorMessage" type="error" class="mb-6">
              {{ errorMessage }}
            </UiAlert>

            <form @submit.prevent="handleSubmit" class="space-y-6" novalidate>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="font-label-sm text-label-sm text-on-surface-variant ml-1 transition-colors duration-200" :class="{ 'text-error': v$.name.$error }" for="name">Name <span class="text-error">*</span></label>
                  <input v-model="form.name" @blur="v$.name.$touch()" class="w-full h-14 px-6 rounded-xl font-body-md bg-surface-container-lowest/50 border text-on-surface placeholder:text-on-surface-variant/40 focus:bg-surface-container-lowest transition-all shadow-sm duration-200" :class="v$.name.$error ? 'border-error focus:border-error focus:ring-4 focus:ring-error/10' : 'border-outline-variant/30 focus:border-secondary focus:ring-4 focus:ring-secondary/10'" id="name" type="text" placeholder="Jane Doe">
                  <p v-if="v$.name.$error" class="text-error text-[11px] font-label-sm ml-1 animate-fade-in">{{ v$.name.$errors[0].$message }}</p>
                </div>
                <div class="space-y-2">
                  <label class="font-label-sm text-label-sm text-on-surface-variant ml-1 transition-colors duration-200" :class="{ 'text-error': v$.email.$error }" for="email">Email <span class="text-error">*</span></label>
                  <input v-model="form.email" @blur="v$.email.$touch()" class="w-full h-14 px-6 rounded-xl font-body-md bg-surface-container-lowest/50 border text-on-surface placeholder:text-on-surface-variant/40 focus:bg-surface-container-lowest transition-all shadow-sm duration-200" :class="v$.email.$error ? 'border-error focus:border-error focus:ring-4 focus:ring-error/10' : 'border-outline-variant/30 focus:border-secondary focus:ring-4 focus:ring-secondary/10'" id="email" type="email" placeholder="jane@example.com">
                  <p v-if="v$.email.$error" class="text-error text-[11px] font-label-sm ml-1 animate-fade-in">{{ v$.email.$errors[0].$message }}</p>
                </div>
              </div>
              <div class="space-y-2">
                <label class="font-label-sm text-label-sm text-on-surface-variant ml-1 transition-colors duration-200" :class="{ 'text-error': v$.message.$error }" for="message">Message <span class="text-error">*</span></label>
                <textarea v-model="form.message" @blur="v$.message.$touch()" class="w-full p-6 rounded-xl font-body-md bg-surface-container-lowest/50 border text-on-surface placeholder:text-on-surface-variant/40 focus:bg-surface-container-lowest transition-all shadow-sm resize-none duration-200" :class="v$.message.$error ? 'border-error focus:border-error focus:ring-4 focus:ring-error/10' : 'border-outline-variant/30 focus:border-secondary focus:ring-4 focus:ring-secondary/10'" id="message" rows="6" placeholder="Tell me about your project or just say hello..."></textarea>
                <p v-if="v$.message.$error" class="text-error text-[11px] font-label-sm ml-1 animate-fade-in">{{ v$.message.$errors[0].$message }}</p>
              </div>
              <div class="pt-4">
                <button type="submit" :disabled="isSubmitting" class="w-full md:w-auto px-10 h-14 bg-primary text-on-primary rounded-full font-label-sm text-label-sm flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed">
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                  <Icon v-if="!isSubmitting" name="material-symbols:send" class="text-xl group-hover:translate-x-1 transition-transform" />
                  <Icon v-else name="material-symbols:refresh" class="text-xl animate-spin" />
                </button>
              </div>
            </form>
          </div>

          <!-- Success Message -->
          <div v-else class="relative z-10 text-center py-12 animate-fade-in">
            <div class="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="material-symbols:check-circle" class="text-4xl text-secondary" />
            </div>
            <h3 class="font-headline-lg text-headline-lg text-primary mb-4">Message Sent!</h3>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
              Thank you for reaching out. I've received your message and will get back to you as soon as possible.
            </p>
            <button @click="resetForm" class="mt-8 font-label-sm text-label-sm text-secondary hover:underline underline-offset-4">
              Send another message
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const { vReveal } = useScrollReveal()

useHead({
  title: 'Contact - Raditya Putranto'
})

const socials = [
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/radityaputranto/', hoverColor: 'group-hover:text-[#0A66C2]' },
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/radityaputranto', hoverColor: 'group-hover:text-black' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/raditya_putranto/', hoverColor: 'group-hover:text-[#E1306C]' },
  { name: 'Unsplash', icon: 'mdi:camera-iris', url: 'https://unsplash.com/@raditya_putranto', hoverColor: 'group-hover:text-black' },
  { name: 'Spotify', icon: 'mdi:spotify', url: 'https://open.spotify.com/user/21ercmyaahviavsid45c74oai', hoverColor: 'group-hover:text-[#1DB954]' },
  { name: 'SoundCloud', icon: 'mdi:soundcloud', url: 'https://soundcloud.com/raditya_putranto', hoverColor: 'group-hover:text-[#FF3300]' },
  { name: 'YouTube', icon: 'mdi:youtube', url: 'https://www.youtube.com/@raditya_putranto', hoverColor: 'group-hover:text-[#FF0000]' },
  { name: 'Twitter', icon: 'mdi:twitter', url: 'https://x.com/radityaputranto', hoverColor: 'group-hover:text-black' },
  { name: 'Behance', icon: 'mdi:behance', url: 'https://www.behance.net/radityaputranto', hoverColor: 'group-hover:text-[#0057ff]' },
  { name: 'Dribbble', icon: 'mdi:dribbble', url: 'https://dribbble.com/raditya_putranto', hoverColor: 'group-hover:text-[#ea4c89]' }
]

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const rules = {
  name: { required },
  email: { required, email },
  message: { required }
}

const v$ = useVuelidate(rules, form)

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  v$.value.$touch()
  if (v$.value.$invalid) return

  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        message: form.message
      }
    })
    isSubmitted.value = true
  } catch (error: any) {
    console.error('Failed to submit form:', error)
    errorMessage.value = error.data?.statusMessage || 'An error occurred while sending your message. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
  errorMessage.value = ''
  v$.value.$reset()
  isSubmitted.value = false
}
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
