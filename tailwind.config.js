/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('./background.jpg')",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

