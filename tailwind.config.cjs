/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#060608",
          panel: "#0a0a0f",
          text: "#d7dbe0",
          strong: "#eef1f4",
          purple: "#9d6bff",
          cyan: "#59f0c8",
          magenta: "#ff3ea5",
        },
      },
      fontFamily: {
        display: ['"Chakra Petch"', "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      maxWidth: {
        cyber: "1280px",
      },
    },
  },
  plugins: [],
};
