/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f0',
          100: '#e8dcc8',
          200: '#ddd4c4',
          300: '#c0b8ac',
          400: '#b89b7b',
          500: '#a89478',
          600: '#8b7a6a',
          700: '#6b5f54',
          800: '#4a3a2a',
          900: '#3d2817',
        },
        accent: '#d8a06e',
        dark: '#3d2817',
      },
    },
  },
  plugins: [],
}
