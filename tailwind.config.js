/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
   theme: {
    extend: {
      fontFamily: {
        'montserrat': ["'Montserrat'", 'sans-serif'],
      },
    }
  },
  plugins: [require("daisyui")],
  plugins: [
    require('flowbite/plugin')
],
}