// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// ../node_modules/pliny/dist/**/*.mjs is needed for monorepo setup
/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    '../node_modules/pliny/**/*.{js,ts,tsx}',
    './node_modules/pliny/**/*.{js,ts,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './lib/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      height: (theme) => ({
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
      dropShadow: {
        teal: '8px 8px rgba(214, 255, 246, 0.43)',
        indigo: '8px 8px rgba(35, 22, 81, 0.43)',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['"Mukta"', ...fontFamily.sans],
        mono: ['"Courier New"', ...fontFamily.mono],
      },
      colors: {
        primary: colors.teal,
        gray: colors.neutral,
        teal: '#D6FFF6',
        indigo: '#231651',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.indigo'),
            a: {
              color: theme('colors.indigo'),
              '&:hover': {
                color: `${theme('colors.indigo')} !important`,
              },
              code: { color: theme('colors.indigo') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.indigo'),
            },
            h2: {
              fontWeight: '900',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.indigo'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.indigo'),
            },
            'h4,h5,h6': {
              color: theme('colors.indigo'),
            },
            pre: {
              backgroundColor: theme('colors.indigo'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.indigo'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.teal'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.indigo') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.indigo'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.indigo'),
            },
            strong: { color: theme('colors.indigo') },
            blockquote: {
              color: theme('colors.indigo'),
              borderLeftColor: theme('colors.indigo'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.teal'),
            a: {
              color: theme('colors.teal'),
              '&:hover': {
                color: `${theme('colors.teal')} !important`,
              },
              code: { color: theme('colors.teal') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.teal'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.teal'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.teal'),
            },
            'h4,h5,h6': {
              color: theme('colors.teal'),
            },
            pre: {
              backgroundColor: theme('colors.teal'),
            },
            code: {
              backgroundColor: theme('colors.teal'),
            },
            details: {
              backgroundColor: theme('colors.teal'),
            },
            hr: { borderColor: theme('colors.teal') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.teal'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.teal'),
            },
            strong: { color: theme('colors.teal') },
            thead: {
              th: {
                color: theme('colors.teal'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.teal'),
              },
            },
            blockquote: {
              color: theme('colors.teal'),
              borderLeftColor: theme('colors.teal'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
