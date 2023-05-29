/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF815F",
        secondary: "rgb(192 93 63)",
      },
      animation: {
        reveal: "reveal 0.6s linear forwards",
      },
      keyframes: {
        reveal: {
          "0%": { transform: "translateY(60px)"},
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
