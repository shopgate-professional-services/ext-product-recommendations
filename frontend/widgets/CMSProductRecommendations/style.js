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
  height: '51px !important',
  width: '320px !important',
  borderRadius: '15px !important',
  marginLeft: 'auto !important',
  marginRight: 'auto !important',
}).toString();

const h3 = css({
  fontSize: 13,
  padding: '0px 30px',
  marginBottom: '0.5em',
});

const h2 = css({
  fontSize: 24,
  marginTop: 0,
  marginBottom: '0.25em',
  padding: '0px 30px',
  width: '50%',
  lineHeight: '29px',
});

export default {
  button,
  h3,
  h2,
};
