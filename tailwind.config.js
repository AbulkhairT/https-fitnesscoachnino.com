/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f1111",
        muted: "#5c6368",
        surface: "#f6f6f4",
        line: "#e6e4df",
        accent: "#1f5b4c",
        "accent-hover": "#18493c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 17, 17, 0.06)",
      },
    },
  },
  plugins: [],
};
