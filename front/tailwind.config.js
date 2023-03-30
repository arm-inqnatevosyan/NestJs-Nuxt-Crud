/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        mycolor: 'hsla(0,0%,100%,0.2)'
      },
      width: {
        my: '80%'
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')]
}
