module.exports = {
  theme: {
    colors: {
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
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      staatliches: ['Staatliches', 'cursive'],
      inter: ['Inter', 'sans-serif'],
      sourcecode: ['"Source Code Pro"', 'sans-serif'],
      h1: ['Staatliches', 'cursive'],
      h2: ['Staatliches', 'cursive'],
      h3: ['Staatliches', 'cursive'],
      h4: ['Inter', 'sans-serif'],
      h5: ['"Source Code Pro"', 'monospace'],
      'display': ['Inter', 'sans-serif'],
      'nav': ['Inter', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
      'footer': ['"Source Code Pro"', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  variants: {},
  plugins: []
}
