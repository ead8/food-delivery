/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '30rem',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        neon: {
          green: '#39FF14',
          blue: '#04d9ff',
          purple: '#b026ff'
        },
        dark: {
          bg: '#0a0a0a',
          card: '#121212',
          border: '#27272a'
        }
      }
    },
    
  },
  plugins: [],
}
