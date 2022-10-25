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
      }, 
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings':'#A9B1D6',
            '--tw-prose-pre-bg': '#282A36',
            '--tw-prose-hr': '#2F3240',
            '--tw-prose-links': '#6E85B7',
            '--tw-prose-quotes': '#A9B1D6',
            '--tw-prose-bold': '#A9B1D6',
            '--tw-prose-code': '#A9B1D6',
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },

            p: {
              'font-family': 'Merriweather'
            },

            code: {
              'background-color': '#24283B',
              'padding': '4px',
              'border-radius': '5px',
            },
            
            hr: {
              'border-width': '2px',
              'background-color': '#2F3240',
            },

            a: {
              'font-family': 'Merriweather',
            },

            'a:hover': {
              'text-decoration': 'none',
            },

            img: {
              'display': 'block',
              'margin-left': 'auto',
              'margin-right': 'auto',
              'width': '75%',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
