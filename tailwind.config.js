/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textsuccess: "#166534",
        textwarning: "#991B1B",
        textcaution: "#854D0E",
        textidea: "#1D4ED8",

        bgsuccess: "#f0fdf4",
        bgwarning: "#fef2f2",
        bgcaution: "#fefce8",
        bgidea: "#eff6ff",
        bgNav: "#003366",
        activeTab: "#00796b",
        inactiveTab: "#4169e1",
        borders: "#495057",
        specialHover: "#2ecc71",

        primary:"#231F20",
        secondary:"#70C1B3",
        tertiary:"#F6F1F1",
        special:"#3B82F6",
        special2:"#D62246"
      },
    },
  },
  plugins: [],
};