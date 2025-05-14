/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inter": ['Inter'],
        "lato": ['Lato'],
        "roboto": ['Roboto'],
        "poppins": ['Poppins'],
        "cokie": ['Cookie'],
        "open": ["Open Sans"],
        "lora": ["Lora"],
        'space': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        black: {
          800: '#151515',
          900:"#191919",
          950 :"#131212"
        },
        white: {
          100: "#f2efef",
          300: '#e1d9d9',
        },
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
      }
    },
  },
  plugins: [],
}
