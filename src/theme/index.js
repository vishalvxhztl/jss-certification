const base = require('./tailwind.base');
const primary = require('./tailwind.primary');
const secondary = require('./tailwind.secondary');

module.exports = {
  base: base,
  primary,
  secondary,
  themes: [primary, secondary],
};
