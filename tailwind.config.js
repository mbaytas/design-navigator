/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        accent: "#43897B",
      },
      screens: {
        xs: "360px",
        sd: "800px",
        hd: "1800px",
        "4k": "2800px",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
    fontFamily: {
      display: [
        "neue-haas-grotesk-display",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
      ],
      sans: [
        "neue-haas-grotesk-text",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
      ],
    },
  },
  plugins: [],
};
