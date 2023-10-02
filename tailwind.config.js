const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [`_site/**/*.html`],
  theme: {
    fontFamily: {
      portfolio: ["Inter", "sans-serif"],
    },
    fontWeight: {
      portfolio: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      }
    },
    extend: {
      colors: {
        "page-light": "#f1f1f1",
        "page-dark": "#181818",
        "card-dark": "#1E1E1E",
        "accent-1-light": "#1E9348",
        "accent-2-light": "#007870",
        "accent-1-dark": "#8ec196",
        "accent-2-dark": "#1E9348",
        "dim-writing-light": "#898989",
      },
      borderRadius: {
        figmabox: "16px",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      margin: ["last"],
    },
    container: [],
  },
  plugins: [require("@tailwindcss/typography")],
};
