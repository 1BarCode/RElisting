module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: '350px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '9/16': '56.25%',
      '3/4': '75%',
      'full': '100%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
