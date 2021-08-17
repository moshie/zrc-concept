const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brand: {
        DEFAULT: '#00D9C5',
        light: '#ECFCF9',
        dark: '#063737',
      },
      info: {
        DEFAULT: '#3B46C4',
        light: '#E9EAFA',
        lighter: '#EEEFFB',
        dark: '#21247F',
      },
      danger: {
        DEFAULT: '#FF4539',
        light: '#FFDAD8',
        dark: '#940700',
      },
      warning: {
        DEFAULT: '#FF9F0A',
        light: '#FFECCE',
        dark: '#704300',
      },
      success: {
        DEFAULT: '#3EBC64',
        light: '#DDFDE5',
        dark: '#17592B',
      },
      white: '#FFFFFF',
      grey: {
        DEFAULT: '#818F9B',
        light: '#D4D7D9',
        lighter: '#EFEFEF',
        lightest: '#F7F7F7',
        dark: '#4A545E',
        darkest: '#2C3236',
      },
    },
    fontFamily: {
      sans: '"Open Sans", Roboto, Helvetica, Arial, sans-serif',
    },
    boxShadow: {
      sm: 'rgb(59 70 196) 0px 0px 4px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
