// eslint-disable-next-line no-undef
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

    backgroundColor: {
      'dp-0': '#121212',
      'dp-1': '#1E1E1E',
      'dp-2': '#232323',
      'dp-3': '#252525',
      'dp-4': '#272727',
      'dp-6': '#2C2C2C',
      'dp-8': '#2F2F2F',
      'dp-12': '#333333',
      'dp-16': '#353535',
      'dp-24': '#383838',
      'primary-dark': '#1A1E1C',
    },

    backgroundOpacity: {
      '0': '0',
      '5': '0.05',
      '7': '0.07',
      '8': '0.08',
      '9': '0.09',
      '11': '0.11',
      '12': '0.12',
      '14': '0.14',
      '15': '0.15',
      '16': '0.16'
    },

    colors: {
      'primary': '#B1FBD7',
      'black': '#000000',
      'white': '#FFFFFF'
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
    },

    zIndex: {
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '6': '6',
      '8': '8',
      '12': '12',
      '16': '16',
      '24': '24'
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
