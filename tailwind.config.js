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
        '8': '2rem',
        '12': '3rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '40': '10rem',
        '56': '14rem',
        '72': '18rem',
        '80': '20rem'
      },
      
      zIndex: {
        '-10': '-10'
      },

      spacing: {
        '22': '5.5rem',
        '31': '7.75rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '43': '10.75rem',
        '57': '14.25rem',
        '76': '19rem',
        '78': '19.5rem',
        '81': '20.25rem',
        '82': '20.5rem',
        '83': '20.75rem',
        '85': '21.25rem',
        '88': '22rem',
        '90': '22.5rem',
        '108': '27rem',
        '122': '30.5rem'
      },

      transitionDuration: {
        '3000': '3000ms',
        '10000': '10000ms'
      },

      scale: {
        '250': '2.5'
      },

      skew: {
        '-8': '-8deg'
      },

      animation: {
        'blink': 'fade-in-out 200ms 5 alternate',
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
