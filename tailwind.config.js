/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    extend: {
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "rgba(0,0,0,.87)",
        blue: "rgb(102, 159, 178, 1)",
        "blue-alt": "rgba(65, 131, 196, 1)",
        "dark-blue": "rgb(25, 47, 84, 1)",
        "light-blue": "rgb(194, 217, 224, 1)",
        red: "rgba(252, 107, 67, 1)",
        gray: "rgb(140, 151, 169, 1)",
        "light-gray": "rgb(205, 213, 225, 1)",
      },
      height: {
        62.5: "15.625rem",
      },
      spacing: {
        1.25: "0.313rem",
        6.25: "1.563rem",
        25: "6.25rem",
      },
      lineHeight: {
        6.25: "1.563rem",
      },
      borderRadius: {
        2.5: "0.625rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
