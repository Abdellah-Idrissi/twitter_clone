/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      },

      colors: {
        'main':'rgb(96 165 250 )',
      },
      
    },
  },
  plugins: [],
};
