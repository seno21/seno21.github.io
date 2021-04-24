module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        btnBlue: {
          DEFAULT: '#517DAD',
          gelap: '#517DBD'
        }
      },
      colors: {
        tartum: {
          DEFAULT: ' #08BA89',
          cyan: '#14dbd8',
          hover: '#08BA77',
          backcolor: '#E6E6E6'
        }
      },
      colors: {
        tlxColor: {
          DEFAULT: '#0000aa',
          shadow: '#2353f3',
          dark: '#191970',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
