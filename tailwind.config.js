/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#171717",
        green: "#2E8B57",
        yellow: "#F7C948",
      },
    },
  },
  plugins: [],
};
