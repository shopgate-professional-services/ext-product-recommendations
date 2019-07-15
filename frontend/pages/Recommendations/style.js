import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { variables, colors } = themeConfig;

const header = css({
  fontSize: 13,
});

const h3 = css({
  fontSize: 13,
});

const h2 = css({
  fontSize: 24,
  marginTop: 0,
});

export default {
  h2,
  h3,
};
