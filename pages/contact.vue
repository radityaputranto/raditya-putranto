<template>
  <main class="pt-32 pb-24 px-margin-x max-w-container-max mx-auto min-h-screen">
    <!-- Header Section -->
    <header class="text-center max-w-2xl mx-auto mb-20" v-reveal>
      <h1 class="font-display text-display text-primary mb-6">Get in Touch</h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        Whether you have a project in mind or just want to say hi, I'd love to hear from you.
      </p>
      <div class="flex flex-wrap justify-center gap-4 mt-8">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" :title="social.name" class="glass-panel p-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-surface-container-lowest group border border-outline-variant/30">
          <Icon :name="social.icon" class="text-xl text-secondary" />
          <span class="font-label-sm text-label-sm text-on-surface hidden sm:block">{{ social.name }}</span>
        </a>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12" v-reveal="1">
      <!-- Send a Message -->
      <div class="lg:col-span-8 lg:col-start-3">
        <div class="glass-panel p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
          <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
          
          <div v-if="!isSubmitted" class="relative z-10 animate-fade-in">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-2">Send a Message</h2>
            <p class="font-body-md text-body-md text-on-surface-variant mb-10">I usually respond within 24 hours.</p>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="font-label-sm text-label-sm text-on-surface-variant ml-1" for="name">Name</label>
                  <input v-model="form.name" class="w-full h-14 px-6 rounded-xl font-body-md bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/40 focus:bg-surface-container-lowest focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all shadow-sm" id="name" required type="text" placeholder="Jane Doe">
                </div>
                <div class="space-y-2">
                  <label class="font-label-sm text-label-sm text-on-surface-variant ml-1" for="email">Email</label>
                  <input v-model="form.email" class="w-full h-14 px-6 rounded-xl font-body-md bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/40 focus:bg-surface-container-lowest focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all shadow-sm" id="email" required type="email" placeholder="jane@example.com">
                </div>
              </div>
              <div class="space-y-2">
                <label class="font-label-sm text-label-sm text-on-surface-variant ml-1" for="message">Message</label>
                <textarea v-model="form.message" class="w-full p-6 rounded-xl font-body-md bg-surface-container-lowest/50 border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/40 focus:bg-surface-container-lowest focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all shadow-sm resize-none" id="message" required rows="6" placeholder="Tell me about your project or just say hello..."></textarea>
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
const { vReveal } = useScrollReveal()

useHead({
  title: 'Contact - Raditya Putranto'
})

const socials = [
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com' },
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com' },
  { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com' },
  { name: 'Medium', icon: 'mdi:post', url: 'https://medium.com' }
]

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Mock API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
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
