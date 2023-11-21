/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.jsx',
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flobits-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

