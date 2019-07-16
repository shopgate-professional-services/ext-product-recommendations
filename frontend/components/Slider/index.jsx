import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@shopgate/engage/core';
import { css } from 'glamor';
import {
  RECOMMENDATION_TYPE_PRODUCT,
  RECOMMENDATION_TYPE_CART,
  RECOMMENDATION_TYPE_USER,
  RECOMMENDATION_TYPE_CMS,
} from '../../constants';
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
const Slider = ({ products, productLimit, type }) => {
  const { ProductSlider } = useTheme();

  if (!products) {
    return null;
  }
  const headerProps = { ...productPage };
  let header;
  switch (type) {
    case RECOMMENDATION_TYPE_PRODUCT:
      header = (<Header {...headerProps} />);
      break;
    case RECOMMENDATION_TYPE_CART:
      // TO-DO
      header = null;
      break;
    case RECOMMENDATION_TYPE_USER:
      // TO-DO
      header = null;
      break;
    case RECOMMENDATION_TYPE_CMS:
      header = null;
      break;
    default:
      header = null;
  }
  const productIds = productLimit ?
    products.map(p => p.id).slice(0, productLimit) :
    products.map(p => p.id);
  return (
    <div className={wrapper}>
      {header}
      <ProductSlider productIds={productIds} />
    </div>
  );
};

Slider.propTypes = {
  productLimit: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })),
  type: PropTypes.string,
};

Slider.defaultProps = {
  products: null,
  productLimit: null,
  type: null,
};

export default Slider;
