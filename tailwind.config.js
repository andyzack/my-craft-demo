module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000', /* BLOCKOUT COLOR PALETTE */
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#33302d', /* BLOCKOUT COLOR PALETTE */
        900: '#1a202c',
      },
      orange: {
        100: '#f7f1e2', /* BLOCKOUT COLOR PALETTE */ 
        200: '#e1dad0', /* BLOCKOUT COLOR PALETTE */ 
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#d9664c', /* BLOCKOUT COLOR PALETTE */ 
        700: '#af5243', /* BLOCKOUT COLOR PALETTE */
        800: '#9c4221',
        900: '#7b341e',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
    },
    fontFamily: {
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      staatliches: ['Staatliches', 'cursive'],
      inter: ['Inter', 'sans-serif'],
      sourcecode: ['"Source Code Pro"', 'sans-serif'],
      'display': ['Inter', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        default: '0',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1450px',
    },
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: []
}
