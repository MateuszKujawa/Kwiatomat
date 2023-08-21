/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary_orange: {
          50: "#F7F0ED",
          100: "#F1E4DF",
          200: "#E3C9BF",
          300: "#D5AE9F",
          400: "#C68F7C",
          500: "#B8765D",
          600: "#995A43",
          700: "#754533",
          800: "#4E2E22",
          900: "#271711",
          950: "#120A08"
        },
      },
    },
  },

  plugins: [],
}

