/* eslint-disable no-undef */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#e9e9e9',
          200: '#bcbcbd',
          300: '#a5a6a7',
          400: '#8f9091',
          500: '#78797a',
          600: '#626364',
          700: '#4b4d4e',
          800: '#353638',
          900: '#1e2022',
        },
        primary: {
          100: '#b2cea8',
          200: '#93ba85',
          300: '#83b073',
          400: '#74a662',
          500: '#649c50',
          600: '#5a8c48',
          700: '#507d40',
          800: '#466d38',
          900: '#3c5e30',
        },
        accent: {
          100: '#fa80a0',
          200: '#f96b90',
          300: '#f95580',
          400: '#f84070',
          500: '#f72b60',
          600: '#de2756',
          700: '#c6224d',
          800: '#ad1e43',
          900: '#941a3a',
        },
        sidenav: {
          100: '#767982',
          200: '#5f636d',
          300: '#484d58',
          400: '#313643',
          500: '#1a202e',
          600: '#171d29',
          700: '#151a25',
          800: '#121620',
          900: '#10131c',
        }
      },
      margin: {
        'global-sm': '1em',
        'global-md': '2em',
        'global-lg': '3em',
      },
      padding: {
        'global-sm': '1em',
        'global-md': '2em',
        'global-lg': '3em',
      },
      maxWidth: {
        'primary-col': '1256px',
      },
      width: {
        'primary-col': '1256px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
