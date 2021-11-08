module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#18DA6A'
      }
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
