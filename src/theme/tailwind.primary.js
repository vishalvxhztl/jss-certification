import { COLORS } from './constants';

module.exports = {
  name: 'Primary',
  extend: {
    colors: {
      ...COLORS,
      'theme-btn-bg': COLORS.primary,
      'theme-btn-text': COLORS.black,
      'theme-btn-text-hover': COLORS.turquoise.black,
    },
  },
};
