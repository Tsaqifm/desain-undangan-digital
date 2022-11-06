/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      fontFamily: {
        playfair: ["Playfair Display"],
        dancing: ["Dancing Script"],
        poppins: ["Poppins"],
      },
      colors: {
        biruTua: "#1E3135",
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  plugins: [],
};
