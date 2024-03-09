/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        smoke: '#e9e9eb',
        audio: '#f1f3f4',
        coal: '#0f0d0e',
        beige: '#f9f4da'
      },
      fontFamily: {
        sans: ['Paytone One', ...defaultTheme.fontFamily.sans],
        serif: ['Paytone One', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
