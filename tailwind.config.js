/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      foreground: '#332E3C',
      background: '#F5F3F5',
      blueAccent: '#6479A7',
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
      // typography: {
      // },

      typography(theme) {
        return {
          DEFAULT: {
            css: {
              '--tw-prose-headings':'#312C3A',
              '--tw-prose-pre-bg': '#282A36',
              '--tw-prose-hr': '#D8D5D9',
              '--tw-prose-links': '#6479A7',
              '--tw-prose-quotes': '#312C3A',
              '--tw-prose-bold': '#312C3A',
              '--tw-prose-code': '#312C3A',
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
                'background-color': '#dddfe1',
                'padding': '4px',
                'border-radius': '5px',
              },
              
              hr: {
                'border-width': '2px',
                'background-color': '#D8D5D9',
              },

              a: {
                'font-family': 'Merriweather',
                'font-weight': 'bold',
              },

              'a:hover': {
                'text-decoration': 'none',
              },

              img: {
                'display': 'block',
                // 'margin-left': 'auto',
                // 'margin-right': 'auto',
                'border-radius': '10px',
                'width': '100%',
              },

              'figcaption': {
                'font-family': 'Merriweather',
                'font-style': 'italic',
                'text-align': 'center',
                'color': '#312C3A'
              }
            }
          }, 

          dark: {
            css: {
              '--tw-prose-headings':'#A9B1D6',
              '--tw-prose-pre-bg': '#282A36',
              '--tw-prose-hr': '#2F3240',
              '--tw-prose-links': '#6E85B7',
              '--tw-prose-quotes': '#A9B1D6',
              '--tw-prose-bold': '#A9B1D6',
              '--tw-prose-code': '#A9B1D6',
              // 'code::before': {
              //   content: '""',
              // },
              // 'code::after': {
              //   content: '""',
              // },
              'code::before': false,
              'code::after': false,

              p: {
                'font-family': 'Merriweather'
              },

              code: {
                'background-color': '#282A36',
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
                // 'margin-left': 'auto',
                // 'margin-right': 'auto',
                'margin': '0px',
                'width': '100%',
              },
              'figcaption': {
                'color': '#A9B1D6',
              }
            }
          }
        }
      }
    },
  },

  variants: {
    extend: { 
      typography: ["dark"] 
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}
