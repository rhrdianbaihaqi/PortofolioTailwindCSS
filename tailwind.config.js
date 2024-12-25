/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#84cc16",
        secondary: "#475569",
        dark: "#020617",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
