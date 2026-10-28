/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FBFBFD',
          subtle: '#F1F5F9',
          dark: '#080A0F',
          darkCard: '#111827',
        },
        ink: {
          DEFAULT: '#0F172A',
          secondary: '#475569',
          muted: '#94A3B8',
          darkPrimary: '#F8FAFC',
          darkSecondary: '#94A3B8',
        },
        brand: {
          blue: '#1E40AF',
          blueHover: '#1D4ED8',
          teal: '#0D9488',
        },
        hairline: {
          DEFAULT: '#E2E8F0',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
