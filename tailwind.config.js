/*
 * @Date: 2023-03-09 11:15:38
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-10 10:45:25
 * @FilePath: /tailwindcss_life/tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
