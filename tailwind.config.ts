/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sase-blue': '#026CB1',
        'sase-green': '#8BC857',
        'ub-blue': '#005BBB',
        'sase-orange': '#FF8200',
        'gray-dark': '#2E2E2E',
        'gray-light': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
