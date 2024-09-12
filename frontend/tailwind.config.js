/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust according to your project structure
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-out',
        'scroll': 'scroll 30s linear infinite', // Add the scroll animation here
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'dark-green': '#004d00',
        'gray-900': '#1a1a1a',
        'gray-800': '#2e2e2e',
        'gray-700': '#3c3c3c',
        'blue-600': '#1e3a8a',
        'blue-700': '#1d4ed8',
        'yellow-300': '#fbbf24',
        'yellow-400': '#f59e0b',
        'green-300': '#34d399',
        'green-400': '#10b981', // Define your dark green color
      },
    },
  },
  plugins: [],
};
