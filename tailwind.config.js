/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '10px',
      base: '12px',
      xl: '24px',
      '2xl': '36px',
      '3xl': '48px',
      '4xl': '64px',
      '5xl': '96px',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      kode: ["Kode Mono", "sans-serif"]
    },
    extend: {
      colors: {
        'white': '#FFF',
        'pink': '#FF00e1',
        'darkest-purple': '#10002b',
        'dark-purple': '#3c096c',
        'purple': '#5a189a',
        'light-purple': '#7b2cbf',
        'lightest-purple': '#c77dff'
      }
      ,
      boxShadow: {
        'btn': '0 5px 5px -5px #fff, 0 5px 5px -9px #ff00e1, 0 10px 8px -10px #ff00e1',
        'box': '0 0 2px #fff, inset 0 0 2px #fff, 0 0 5px #FF00e1, 0 0 15px #FF00e1, 0 0 30px #FF00e1'
      },
      backgroundImage: {
        'stripped': 'repeating-linear-gradient(to bottom, transparent 7px, rgba(0, 0, 0, 0.8) 9px, rgba(0, 0, 0, 0.8) 13px, transparent 13px);'
      }

    },
  },
plugins: [
  require('@codaworks/react-glow/tailwind')
],
}

