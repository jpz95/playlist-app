const { colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['noto-sans', ...fontFamily.sans],
    },
    colors: {
      // cool navy
      primary: {
        lighter: '#475A7e',
        default: '#1a3152',
        darker: '#7587ad',
      },
      // cool teal
      secondary: {
        lighter: '#75a4ad',
        default: '#47757e',
        darker: '#184952',
      },
      // cool purple
      tertiary: {
        lighter: '#7d72ae',
        default: '#4f477e',
        darker: '#232051',
      },

      black: colors.black,
      white: {
        lighter: colors.gray[200],
        default: colors.white,
      },
      gray: colors.gray,
      red: {
        lighter: colors.red[400],
        default: colors.red[500],
        darker: colors.red[600],
      },
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
