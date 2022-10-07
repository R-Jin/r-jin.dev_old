/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      foreground: '#332E3C',
      background: '#F5F3F5',
      blueAccent: '#6E85B7',
      switchBlack: '#312C3A',
      darkBackground: '#1A1B26',
      'darkforeground-50': '#A9B1D6',
      'darkforeground-100': '#2F3240',
      darkLightBackground: '#24283B',
      darkAccent: '#6E85B7',
    },
    fontFamily: {
      'sans': ['Inter'],
      'serif': ['Merriweather']
    },
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '4096px',
      }
    },
  },
  plugins: [],
}
