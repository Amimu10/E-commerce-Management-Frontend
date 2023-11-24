/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'cinzel':['Cinzel', 'serif'], 
      },
    },
  },
  plugins: [require("daisyui"), [require("tw-elements/dist/plugin.cjs")]], 
  
}

