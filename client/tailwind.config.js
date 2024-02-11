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
        "black-sh": "0px 35px 50px -15px rgba(0, 0, 0, 0.50)",
      },
      backgroundImage: {
        "check-gradient": "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)",
      },
      screens: {
        tablet: { max: "37.5em" },
      },
    },
  },
  plugins: [],
};
