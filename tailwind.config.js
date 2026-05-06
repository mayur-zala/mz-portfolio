/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",
        secondary: "#334155",
        accent: "#22C55E",
        dark: "#0F172A",
        light: "#F8FAFC",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "display": ["48px", { lineHeight: "1.2" }],
        "heading": ["36px", { lineHeight: "1.3" }],
        "subheading": ["24px", { lineHeight: "1.4" }],
      },
      spacing: {
        "section": "48px",
      },
    },
  },
  plugins: [],
}
