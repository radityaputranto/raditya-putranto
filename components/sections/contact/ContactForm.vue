<template>
  <section class="py-section-gap">
    <div class="max-w-container mx-auto px-6 lg:px-8">
      <div v-reveal class="flex items-center gap-4 mb-8">
        <label for="contact-name" class="sr-only">Name</label>
      </div>

      <div v-reveal class="grid lg:grid-cols-2 gap-12">
        <!-- Form -->
        <div class="glass rounded-glass p-8">
          <h3 class="text-headline-md font-heading text-primary mb-6">Send a Message</h3>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label for="contact-name" class="block text-sm font-label font-medium text-on-surface-variant mb-1.5">Name</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                required
                class="contact-input"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="contact-email" class="block text-sm font-label font-medium text-on-surface-variant mb-1.5">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                required
                class="contact-input"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label for="contact-subject" class="block text-sm font-label font-medium text-on-surface-variant mb-1.5">Subject</label>
              <input
                id="contact-subject"
                v-model="form.subject"
                type="text"
                class="contact-input"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label for="contact-message" class="block text-sm font-label font-medium text-on-surface-variant mb-1.5">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                required
                rows="5"
                class="contact-input resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <UiButtonPrimary type="submit" :disabled="!isValid || loading" class="w-full">
              {{ loading ? 'Sending...' : 'Send Message' }}
            </UiButtonPrimary>

            <p v-if="success" class="text-green-600 text-sm font-medium text-center">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
            <p v-if="error" class="text-error text-sm font-medium text-center">
              {{ error }}
            </p>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div v-reveal="1">
            <h3 class="text-headline-md font-heading text-primary mb-4">Let's Connect</h3>
            <p class="text-body-lg text-on-surface-variant mb-6">
              Whether you have a project idea, a question, or just want to say hi — I'd love to hear from you.
            </p>
          </div>

          <div v-reveal="2" class="space-y-4">
            <div class="glass-card flex items-center gap-4 !p-4 cursor-default">
              <span class="text-2xl">📧</span>
              <div>
                <p class="text-xs text-on-surface-variant font-label uppercase tracking-wider">Email</p>
                <a href="mailto:radityaputranto@gmail.com" class="text-sm font-semibold text-primary hover:text-secondary transition-colors">
                  radityaputranto@gmail.com
                </a>
              </div>
            </div>

            <div class="glass-card flex items-center gap-4 !p-4 cursor-default">
              <span class="text-2xl">📍</span>
              <div>
                <p class="text-xs text-on-surface-variant font-label uppercase tracking-wider">Location</p>
                <p class="text-sm font-semibold text-primary">Indonesia</p>
              </div>
            </div>

            <div class="glass-card flex items-center gap-4 !p-4 cursor-default">
              <span class="text-2xl">💼</span>
              <div>
                <p class="text-xs text-on-surface-variant font-label uppercase tracking-wider">Status</p>
                <UiStatusBadge />
              </div>
            </div>
          </div>

          <div v-reveal="3">
            <h4 class="text-label-caps font-label uppercase tracking-widest text-on-surface-variant mb-4">
              Social Media
            </h4>
            <div class="flex flex-wrap gap-3">
              <UiSocialIcon
                v-for="social in socials"
                :key="social.name"
                v-bind="social"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { vReveal } = useScrollReveal()
const { form, loading, success, error, submitForm, isValid } = useContactForm()

const socials = [
  { name: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/radityaputranto/' },
  { name: 'GitHub', icon: '⌨', url: 'https://github.com/radityaputranto' },
  { name: 'Instagram', icon: '📷', url: 'https://instagram.com/raditya_putranto' },
  { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/radityaputranto' },
  { name: 'Medium', icon: 'M', url: 'https://medium.com/@radityaputranto' },
  { name: 'Unsplash', icon: '📸', url: 'https://unsplash.com/@raditya_putranto' },
]
</script>

<style scoped>
.contact-input {
  @apply w-full px-4 py-3 rounded-card bg-surface-container-lowest border border-outline-variant/30
    text-on-surface text-sm font-body placeholder:text-outline
    transition-all duration-300 ease-smooth
    focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:shadow-[0_0_0_3px_rgba(57,95,148,0.1)];
}
</style>
