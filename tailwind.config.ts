import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
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
        "tertiary-fixed": "#62fae3",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#2d3133",
        "on-secondary-fixed": "#1c0062",
        "on-error-container": "#93000a",
        "error-container": "#ffdad6",
        "surface-container-highest": "#e0e3e5",
        "on-error": "#ffffff",
        "surface-variant": "#e0e3e5",
        "tertiary-fixed-dim": "#3cddc7",
        "primary-fixed": "#e2e2e6",
        "error": "#ba1a1a",
        "on-tertiary-fixed-variant": "#005047",
        "primary": "#000000",
        "on-secondary": "#ffffff",
        "surface-dim": "#d8dadc",
        "background": "#f7f9fb",
        "tertiary-container": "#00201c",
        "outline-variant": "#c6c6ca",
        "surface-container-low": "#f2f4f6",
        "on-surface": "#191c1e",
        "on-tertiary-fixed": "#00201c",
        "inverse-primary": "#c6c6ca",
        "surface-container-high": "#e6e8ea",
        "tertiary": "#000000",
        "on-tertiary": "#ffffff",
        "secondary-fixed": "#e6deff",
        "secondary-fixed-dim": "#cabeff",
        "on-primary": "#ffffff",
        "surface-bright": "#f7f9fb",
        "primary-fixed-dim": "#c6c6ca",
        "surface-tint": "#5d5e62",
        "outline": "#76777b",
        "surface": "#f7f9fb",
        "on-primary-fixed": "#1a1c1f",
        "on-primary-fixed-variant": "#45474a",
        "inverse-on-surface": "#eff1f3",
        "on-primary-container": "#838487",
        "surface-container": "#eceef0",
        "secondary-container": "#7757f9",
        "on-secondary-fixed-variant": "#4717ca",
        "on-secondary-container": "#fffbff",
        "primary-container": "#1a1c1f",
        "secondary": "#5d39df",
        "on-tertiary-container": "#009485",
        "on-surface-variant": "#45474a",
        "on-background": "#191c1e"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
        "2xl": "1.5rem"
      },
      spacing: {
        "nav-height": "80px",
        "gutter": "24px",
        "margin-x": "32px",
        "card-gap": "20px",
        "container-max": "1200px"
      },
      fontFamily: {
        "headline-md": ["Plus Jakarta Sans"],
        "display": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "label-sm": ["Inter"],
        "heading": ["Plus Jakarta Sans"],
        "body": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "headline-md": ["20px", { "lineHeight": "1.4", "fontWeight": "600" }],
        "display": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "label-sm": ["13px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }]
      }
    }
  }
}
