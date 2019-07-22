import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, useNavigation } from '@shopgate/engage/core';
import { Button } from '@shopgate/engage/components';
import { css } from 'glamor';
import { RECOMMENDATIONS_PATH } from '../../constants';
import { productPage } from '../../config';
import Header from '../Header';
import styles from './style';

const wrapper = css({
  padding: '1rem 0',
}).toString();

/**
 * Slider component.
 * @param {Object} props props
 * @returns {JSX}
 */
const Slider = ({ products, type, settings }) => {
  if (!products || !products.length) {
    return null;
  }
  const { ProductSlider } = useTheme();
  const { push } = useNavigation();

  const headerProps = settings || productPage;
  // TODO: cart page

  const productIds = products.map(p => p.id);

  const {
    CTABackgroundColor,
    CTAColor,
    CTAText,
  } = settings || {};

  return (
    <div className={wrapper}>
      <Header {...headerProps} />
      <ProductSlider productIds={productIds} />
      {CTAText && ((
        <Button
          className={styles.button(CTABackgroundColor, CTAColor)}
          onClick={() => push({ pathname: RECOMMENDATIONS_PATH })}
        >
          {CTAText}
        </Button>))
      }
    </div>
  );
};

Slider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })),
  settings: PropTypes.shape(),
  type: PropTypes.string,
};

Slider.defaultProps = {
  products: null,
  type: null,
  settings: null,
};

export default Slider;
