/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        main: '#071952',
        'main-dark': '#00134E',
        accent: '#3FD357',
        'accent-dark': '#27bd40',
      },
      fontFamily: {
        zain: ['zain', 'sans-serif'],
      },
      keyframes: {
        scrollDown: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        scrollDown: 'scrollDown 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
