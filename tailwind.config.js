/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        dancing: ["Dancing Script"],
      },
      colors: {
        biruTua: "#1E3135",
      },
    },
  },
  plugins: [],
};
