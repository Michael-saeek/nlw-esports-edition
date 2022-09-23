/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/assets/Fundo.png')",
        'gameGradient': "linear-gradient(360deg, black, transparent)",
        'logo': "url('/assets/Logo.png')",
        'img1': "url('/assets/img1.png')",
        'img2': "url('/assets/img2.png')",
        'img3': "url('/assets/img3.png')",
        'img4': "url('/assets/img4.png')",
        'img5': "url('/assets/img5.png')",
        'img6': "url('/assets/img6.png')",
        'nlw-gradient': "linear-gradient(89.86deg, #9572FC 15%, #43E7AD 58%, #E1D55D 95%)",
      },
      colors: {
        'color-box': '#2A2634',
        
      }
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: [ 'Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
