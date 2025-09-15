/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space1: "rgba(29, 41, 72, 1)",
        space2: "rgba(20, 29, 51, 1)",
        space3: "rgba(15, 22, 40, 1)",
        space4: "rgba(5, 10, 22, 1)",
      },
      backgroundImage: {
        "space-gradient": "linear-gradient(135deg, rgba(29,41,72,1), rgba(5,10,22,1))",
      },
    },
  },
  plugins: [],
};
