export function useContactForm() {
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const loading = ref(false)
  const success = ref(false)
  const error = ref('')

  const submitForm = async () => {
    loading.value = true
    error.value = ''
    success.value = false

    try {
      const client = useSupabaseClient()
      const { error: submitError } = await client
        .from('contact_messages')
        .insert({ ...form })

      if (submitError) throw submitError

      success.value = true
      resetForm()
    } catch (e: any) {
      console.error('Error submitting form:', e)
      error.value = e?.message || 'Something went wrong. Please try again.'
    } finally {
      loading.value = false
    }
  }

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }

  const isValid = computed(() => {
    return form.name.trim() && form.email.trim() && form.message.trim()
  })

  return { form, loading, success, error, submitForm, resetForm, isValid }
}
