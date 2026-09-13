/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#1D9E75",
          dark: "#146349",
          light: "#E6F4EF",
        },
        ink: "#1A1A1A",
        paper: "#FAFAF8",
        gold: {
          DEFAULT: "#D9A441",
          light: "#FBF1DD",
        },
        line: "#E4E1D8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
