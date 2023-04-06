/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 3s linear infinite",
      },
      keyframes: {
        blob: {
          "0%,100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, -20px) scale(1.1)" },
          "66%": { transform: "translate(20px, 60px) scale(.9)" },
        },
      },
    },
  },
  plugins: [],
};
