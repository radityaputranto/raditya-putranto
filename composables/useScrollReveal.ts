export function useScrollReveal() {
  const observe = (el: HTMLElement) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
  }

  const vReveal = {
    mounted(el: HTMLElement, binding: { value?: number }) {
      el.classList.add('reveal')
      if (binding.value) {
        el.style.transitionDelay = `${binding.value * 0.1}s`
      }
      // Small delay to ensure CSS is applied before observing
      requestAnimationFrame(() => observe(el))
    },
  }

  return { vReveal }
}
