/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        dark: '#475569',
        primary: '#2563eb',
        green: '#16a34a',
        red: '#dc2626',
        "dark-light": "#e2e8f0"
      },
    },
  },
  plugins: [],
}
