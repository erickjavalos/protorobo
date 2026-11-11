/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gagalin: ['"GagalinRegular"', 'sans-serif'],
      },
      colors: {
        navy: '#18165A',
      },
      keyframes: {
        float: {
          '0%':   { transform: 'translateY(0px)' },
          '50%':  { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
