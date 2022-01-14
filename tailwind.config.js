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
      zIndex: {
        '-10': '-10'
      },

      spacing: {
        '22': '5.5rem',
        '38': '9.5rem',
        '43': '10.75rem',
        '57': '14.25rem',
        '76': '19rem',
        '81': '20.25rem',
        '85': '21.25rem',
        '88': '22rem',
        '90': '22.5rem',
        '108': '27rem',
        '122': '30.5rem'
      },

      transitionDuration: {
        '3000': '3000ms',
      },

      animation: {
        'back-and-forth': 'back-and-forth 800ms ease-in-out infinite alternate',
        'blink': 'fade-in-out 200ms 5 alternate',
        'fade-in-out': 'fade-in-out 600ms infinite alternate',
        'up-and-down': 'up-and-down 800ms ease-in-out infinite alternate',
      },

      keyframes: {
        'back-and-forth': {
          'from': { transform: 'translate(0rem)' },
          'to': { transform: 'translate(0.5rem)' }
        },

        'fade-in-out': {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },

        'up-and-down': {
          'from': { transform: 'translate(0rem, 0rem)' },
          'to': { transform: 'translate(0rem, -0.5rem)' }
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
      tertiary: '#B1FBD7'
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
