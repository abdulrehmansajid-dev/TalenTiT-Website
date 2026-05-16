module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#d8e7ff',
          200: '#b1d0ff',
          300: '#79adff',
          400: '#3b7bff',
          500: '#0b3d91',
          600: '#0a356f',
          700: '#07254b',
          800: '#04172f',
          900: '#020b19'
        },
        accent: {
          50: '#fff3eb',
          100: '#ffe5d1',
          200: '#ffc9a8',
          300: '#ffac7a',
          400: '#ff8b45',
          500: '#d35400',
          600: '#b24400',
          700: '#7f2f00',
          800: '#4f1b00',
          900: '#2a0d00'
        }
      }
    }
  },
  plugins: []
}
