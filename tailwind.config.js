/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        mosmotors: ['"Edu VIC WA NT Beginner"'],
        about: ['Pacifico'],
        body: ["Gentium Plus"],
        script: ['Dancing Script'],
      },
      backgroundImage: {
        "nav-image": "url('../public/img/nav.jpg')",
        "watch-car": "url('../public/img/watchescar.jpeg')",
        "mission": "url('../public/img/alvaro-serrano.jpg')",
      },
      colors: {
        skiblue: "#1da1f2",
        blueh: "#0b0b5c",
        purpleh: "#e95086",
        secondary: {
          100: "#CECE88",
          200: "#888883",
        },
        grayhex: "#b7b2b2",
        bluehex: "#1f426f",
        greenhex: {
          300: " #714f04",
          400: "#93810b",
          500: "#ccb838",
          600: "#022301",
        },
      },
    },
  },
  plugins: [],
}
