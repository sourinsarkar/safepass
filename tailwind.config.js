/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'iconColor': "#2C3548",
        'iconBgColor': "#F5F5F5",
        'primaryFontColor': "#27282C",
        'primeTextColor': "#5D6576",
      },
      boxShadow: {
        'sh_Light': "0px 1.5px 4px 0px rgba(0, 0, 0, 0.15)",
      }
    },
  },
  plugins: [],
}

