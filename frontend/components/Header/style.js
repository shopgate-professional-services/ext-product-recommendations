import { css } from 'glamor';

/**
 * @param {string} background Value for the background property
 * @param {string} color Value for the color property
 * @return {StyleAttribute}
 */
const wrapper = (background, color) => css({
  background,
  color,
  margin: '12px 16px',
  letterSpacing: '-0.01em',
});

const h3 = css({
  fontSize: 13,
  lineHeight: '16px',
});

const h2 = css({
  fontSize: 22,
  lineHeight: '29px',
  marginTop: 0,
});

export default {
  wrapper,
  h2,
  h3,
};
