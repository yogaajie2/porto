module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '80': '20rem'
      },

      transitionDuration: {
        '10000': '10000ms'
      },

      scale: {
        '250': '2.5'
      },

      skew: {
        '-8': '-8deg'
      },

      zIndex: {
        '-10': '-10'
      }
    },

    colors: {
      primary: {
        DEFAULT: '#141515',
        light: '#1E1F1F',
        lighter: '#282929',
        lightest: '#323434'
      },

      secondary: '#EAEBEB',
      tertiary: '#B1FBD7',
      black: '#000',
      white: '#fff',
      transparent: 'transparent'
    },

    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
      'heading': ['Raleway', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
