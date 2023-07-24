/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      animation: {
        fade: 'fadeOut 500ms ease-in-out',
        spinner: 'scaleOut 1000ms infinite ease-in-out',
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleOut: {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 0,
          },
        },
      }),
    },
  },
  plugins: [],
  darkMode: 'class',
}
