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
      },
      keyframes: {
        
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'dark-green': '#004d00', // Define your dark green color
      },
      
    },
  },
  plugins: [],
};
