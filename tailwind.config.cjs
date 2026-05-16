module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f8ff',
          100: '#dff0ff',
          200: '#bfe0ff',
          300: '#80c8ff',
          400: '#42aaff',
          500: '#1488ff',
          600: '#0f6ee6',
          700: '#0d57b3',
          800: '#0a3f80',
          900: '#07284d'
        },
        accent: {
          50: '#fff6f0',
          100: '#ffe8d8',
          200: '#ffd0b1',
          300: '#ffb07a',
          400: '#ff8a3f',
          500: '#ff6b14',
          600: '#e85a10',
          700: '#b7440c',
          800: '#7f3008',
          900: '#4a1a04'
        }
      }
    }
  },
  plugins: []
}
