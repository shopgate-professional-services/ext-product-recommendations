import { css } from 'glamor';

/**
 * @param {string} CTABackgroundColor background-color
 * @param {string} CTAColor color
 * @return {StyleAttribute}
 */
const button = (CTABackgroundColor, CTAColor) => css({
  display: 'block !important',
  backgroundColor: `${CTABackgroundColor} !important`,
  color: `${CTAColor} !important`,
  marginLeft: 'auto !important',
  marginRight: 'auto !important',
}).toString();

export default {
  button,
};
