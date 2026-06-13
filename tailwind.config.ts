/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#081534',
          container: '#1E2A4A',
          fixed: '#DAE2FF',
          'fixed-dim': '#BAC5EE',
        },
        secondary: {
          DEFAULT: '#395F94',
          container: '#9EC2FE',
          fixed: '#D5E3FF',
          'fixed-dim': '#A7C8FF',
        },
        tertiary: {
          DEFAULT: '#021635',
          container: '#192B4B',
        },
        surface: {
          DEFAULT: '#F8F9FC',
          dim: '#D9DADD',
          bright: '#F8F9FC',
          container: {
            DEFAULT: '#EDEEF1',
            low: '#F2F3F6',
            high: '#E7E8EB',
            highest: '#E1E2E5',
            lowest: '#FFFFFF',
          },
          variant: '#E1E2E5',
          tint: '#525D80',
        },
        'on-surface': {
          DEFAULT: '#191C1E',
          variant: '#45464E',
        },
        outline: {
          DEFAULT: '#76777F',
          variant: '#C6C6CF',
        },
        inverse: {
          surface: '#2E3133',
          'on-surface': '#F0F1F4',
          primary: '#BAC5EE',
        },
        error: {
          DEFAULT: '#BA1A1A',
          container: '#FFDAD6',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        label: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '500' }],
        'label-caps': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }],
      },
      spacing: {
        'sidebar': '320px',
        'container-max': '1200px',
        'gutter': '32px',
        'section-gap': '80px',
        'stack-gap': '24px',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'glass': '16px',
        'card': '12px',
      },
      backdropBlur: {
        'glass': '24px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(30, 42, 74, 0.04)',
        'glass-hover': '0 20px 40px rgba(30, 42, 74, 0.08)',
        'card': '0 2px 16px rgba(30, 42, 74, 0.03)',
        'card-hover': '0 12px 32px rgba(30, 42, 74, 0.06)',
        'button': '0 4px 12px rgba(30, 42, 74, 0.1)',
        'nav': '0 4px 20px rgba(30, 42, 74, 0.06)',
      },
      animation: {
        'blob-1': 'blob1 12s ease-in-out infinite',
        'blob-2': 'blob2 14s ease-in-out infinite 2s',
        'blob-3': 'blob3 16s ease-in-out infinite 4s',
        'blob-4': 'blob4 18s ease-in-out infinite 6s',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delay-1': 'fadeUp 0.6s ease-out 0.1s forwards',
        'fade-up-delay-2': 'fadeUp 0.6s ease-out 0.2s forwards',
        'fade-up-delay-3': 'fadeUp 0.6s ease-out 0.3s forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-out-right': 'slideOutRight 0.3s ease-in forwards',
        'typing-cursor': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.15) rotate(5deg)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9) rotate(-3deg)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-50px, 40px) scale(1.1) rotate(-5deg)' },
          '66%': { transform: 'translate(30px, -40px) scale(0.95) rotate(3deg)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(30px, 50px) scale(1.05) rotate(3deg)' },
          '66%': { transform: 'translate(-40px, -30px) scale(1.1) rotate(-5deg)' },
        },
        blob4: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -30px) scale(1.08)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
