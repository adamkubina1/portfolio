/** @type {import('tailwindcss').Config} */
const colors = require('./lib/style/colors');

module.exports = {
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  theme: {
    colors: colors,
    extend: {
      fontFamily: {
        sans: ['var(--font-openSans)'],
      },
    },
  },
};
