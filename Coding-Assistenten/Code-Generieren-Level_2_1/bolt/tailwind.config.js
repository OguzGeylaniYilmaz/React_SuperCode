/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff00ff',
        'neon-blue': '#00ffff',
        'neon-purple': '#b026ff',
        'dark-purple': '#120524',
        'black-purple': '#0a0112',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Audiowide', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};