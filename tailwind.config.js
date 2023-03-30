/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {fontFamily: {
      "Rubik": ['Rubik', ...defaultTheme.fontFamily.sans],
      "Lora": ['Lora', ...defaultTheme.fontFamily.sans],
     
    },},
  },
  plugins: [],
}