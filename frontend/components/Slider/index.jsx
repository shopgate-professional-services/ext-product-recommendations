import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@shopgate/engage/core';
import { css } from 'glamor';
import { productPage } from '../../config';
import Header from '../Header';

const wrapper = css({
  padding: '1rem 0',
}).toString();

/**
 * Slider component.
 * @param {Array|null} products Products
 * @returns {JSX}
 */
const Slider = ({ products }) => {
  const { ProductSlider } = useTheme();

  if (!products) {
    return null;
  }

  // TODO, later this can be extended to by "type" wise.
  const headerProps = { ...productPage };

  return (
    <div className={wrapper}>
      <Header {...headerProps} />
      <ProductSlider productIds={products.map(p => p.id)} />
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
};

Slider.defaultProps = {
  products: null,
};

export default Slider;
