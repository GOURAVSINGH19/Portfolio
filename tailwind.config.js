/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgcolor':("url(../img/noise.png), radial-gradient(at top, #f9a132 0%, #ddd 100%")
      }
    },
  },
  plugins: [],
}