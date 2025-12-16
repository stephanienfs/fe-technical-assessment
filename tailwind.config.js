/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        airops: {
          purple: "#ADABFF",
          "purple-dark": "#8B88E6",
          "purple-light": "#C5C3FF",
          gray: {
            icon: "#808593",
            light: "#A1A1A1",
          },
        },
      },
    },
  },
  plugins: [],
};
