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
      
      zIndex: {
        '-10': '-10'
      },

      spacing: {
        '42': '11.5rem',
        '88': '22rem'
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

      animation: {
        'fade-in-out': 'fade-in-out 600ms infinite alternate'
      },

      keyframes: {
        'fade-in-out': {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        }
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
      'heading': ['Raleway', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif']
    }
  },

  variants: {
    extend: {
      translate: ['group-hover'],
      animation: ['group-hover']
    }
  },

  plugins: [],
}
