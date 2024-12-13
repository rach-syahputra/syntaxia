import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--dark)',
        'dark-gray': 'var(--dark-gray)',
        gray: 'var(--gray)',
        'light-gray': 'var(--light-gray)',
        light: 'var(--light)'
      }
    }
  },
  plugins: []
} satisfies Config
