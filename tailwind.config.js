/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'primary-dark': '#19193F',
      'custom-dark': {
        DEFAULT: '#292967',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}