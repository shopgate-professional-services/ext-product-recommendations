import { css } from 'glamor';

/**
 * @param {string} background Value for the background property
 * @param {string} color Value for the color property
 * @return {StyleAttribute}
 */
const wrapper = (background, color) => css({
  background,
  color,
  padding: '25px 30px 0',
});

const h3 = css({
  fontSize: 13,
});

const h2 = css({
  fontSize: 24,
  marginTop: 0,
});

export default {
  wrapper,
  h2,
  h3,
};
