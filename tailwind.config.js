/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      colors: {
        cwCyan: '#06d9f5',
        cwPink: '#fd17f7',
        cwDark: '#1a1a2e',
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        russo: ['"Russo One"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave-slow': 'wave 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
