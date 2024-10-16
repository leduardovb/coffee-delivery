import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        'text-l': ['1.25rem', '130%'],
        'text-m': ['1rem', '130%'],
        'text-s': ['0.875rem', '130%'],
        'text-xs': ['0.75rem', '130%'],
        tag: ['0.625rem', '130%'],
        'button-g': ['0.875rem', '160%'],
        'button-m': ['0.75rem', '160%'],
        'title-xl': ['3rem', '130%'],
        'title-l': ['2rem', '130%'],
        'title-m': ['1.5rem', '130%'],
        'title-s': ['1.25rem', '130%'],
        'title-xs': ['1.125rem', '130%'],
      },
      textColor: {
        yellow: {
          DEFAULT: 'var(--yellow)',
          light: 'var(--yellow-light)',
          dark: 'var(--yellow-dark)',
        },
        purple: {
          DEFAULT: 'var(--purple)',
          light: 'var(--purple-light)',
          dark: 'var(--purple-dark)',
        },
        base: {
          title: 'var(--base-title)',
          subtitle: 'var(--base-subtitle)',
          text: 'var(--base-text)',
          label: 'var(--base-label)',
          hover: 'var(--base-hover)',
          button: 'var(--base-button)',
          input: 'var(--base-input)',
          card: 'var(--base-card)',
          background: 'var(--base-background)',
        },
      },
    },
  },
  plugins: [],
}
export default config
