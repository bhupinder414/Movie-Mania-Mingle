/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#1a365d",
        beige: "#b29393",
        blur: "rgba(0, 0, 0, 0.6)",
      },
      height: {
        "fit-content": "fit-content",
      },
    },
  },
  plugins: [],
};
