import { COLORS } from './constants';

module.exports = {
  name: 'Secondary',
  extend: {
    colors: {
      ...COLORS,
      primary: COLORS.green,
      'theme-btn-bg': COLORS.green,
      'theme-btn-text': COLORS.white,
      'theme-btn-text-hover': COLORS.gray.light,
    },
  },
};
