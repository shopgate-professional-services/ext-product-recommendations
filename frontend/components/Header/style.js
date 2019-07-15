import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

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
