/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/*.{js,ts,jsx,tsx}",
    "./app/**/*.js",
    "./app/**/**/*.js",
    "./app/pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",

  ],


  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        'primary': '#0CADB7',
        'secondary': '#FE7263'
      },
    },
  },
  plugins: [],
}
