/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand palette aligned with live site: warm brown + amber/orange accent */
        ink: "#231f1e",
        muted: "#6b6560",
        surface: "#faf8f5",
        line: "#e5e0d8",
        accent: "#f3a024",
        "accent-hover": "#d88a12",
        brandblue: "#005bac",
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
