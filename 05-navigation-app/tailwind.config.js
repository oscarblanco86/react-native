/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#49129c',
        secondary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266'
        },
        tertiary: '#EF2967'
      },

      fontFamily: {
        'ubuntu-bold':['Ubuntu-Bold','arial'],
        'ubuntu-light':['Ubuntu-Light','arial'],
        'ubuntu-medium':['Ubuntu-Medium','arial'],
        'ubuntu-regular':['Ubuntu-Regular','arial'],
      }
    },
  },
  plugins: [],
}