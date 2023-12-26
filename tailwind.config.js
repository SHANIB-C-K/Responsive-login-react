/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "40r": "40rem",
        "35r": "30rem",
      },
      height: {
        "40r": "40rem",
        "35r": "30rem",
      },
    },
  },
  plugins: [],
};
