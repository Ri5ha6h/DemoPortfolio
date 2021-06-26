module.exports = {
  mode: 'jit',
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heebo:
          "url('https://fonts.googleapis.com/css2?family=Heebo&display=swap')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
