/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
      softRed: "hsl(14, 88%, 65%)",
      gradientSoftViolet: "hsl(273, 75%, 66%)",
      gradientSoftBlue: "hsl(240, 73%, 65%)",
      textVeryDarkGrayishBlue: "hsl(237, 12%, 33%)",
      textDarkGrayishBlue: "hsl(240, 6%, 50%)",
      dividerLightGrayishBlue: "hsl(240, 5%, 91%)",
      white: "#ffffff",
    },
  },
  plugins: [],
};
