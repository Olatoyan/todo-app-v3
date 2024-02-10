/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      boxShadow: {
        "white-sh": "0px 35px 50px -15px rgba(194, 195, 214, 0.50)",
      },
    },
  },
  plugins: [],
};
