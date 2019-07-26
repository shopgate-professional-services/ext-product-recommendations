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
  marginTop: 25,
  marginBottom: 5,
}).toString();

export default {
  button,
};
