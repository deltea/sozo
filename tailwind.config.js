/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      "sans": ["Inter Variable", "sans-serif"],
      "mono": ["Ubuntu Mono", "monospace"],
      "nunito": ["Nunito Variable", "sans-serif"],
      "quicksand": ["Quicksand Variable", "sans-serif"],
    },
    extend: {
      colors: {
        "black": "#222"
      },
      borderWidth: {
        "3": "3px"
      },
      spacing: {
        "nav": "3.5rem",
      }
    },
  },
  plugins: [],
}
