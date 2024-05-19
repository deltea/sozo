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
      boxShadow: {
        "button": "#4525ff 0 4px",
        "button-down": "#4525ff 0 0",
      }
    },
  },
  plugins: [],
}
