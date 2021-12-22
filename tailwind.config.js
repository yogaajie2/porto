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
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '40': '10rem',
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

      spacing: {
        '42': '11.5rem',
        '88': '22rem'
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

    container: {
      center: true,

      padding: {
        DEFAULT: '2rem',
        md: '4rem',
        lg: '6rem',
        xl: '8rem'
      }
    },

    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
      'heading': ['Raleway', 'sans-serif']
    }
  },
  variants: {
    extend: {
      translate: ['group-hover']
    },
  },
  plugins: [],
}
