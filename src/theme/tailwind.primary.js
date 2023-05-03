import { COLORS } from './constants';

module.exports = {
  name: 'Primary',
  extend: {
    colors: {
      ...COLORS,
      'theme-btn-primary-text': COLORS.black,
    },
  },
};
