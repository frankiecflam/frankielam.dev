const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: {
          DEFAULT: "#111010",
          100: "#211F1F",
          200: "#333030",
          300: "#454141",
          400: "#565151",
          500: "#686262",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#EDEDED",
          200: "#DCDCDC",
          300: "#BABABA",
          400: "#A9A9A9",
          500: "#989898",
        },
      },
    },
  },
  plugins: [],
};
