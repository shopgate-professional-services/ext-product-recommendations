import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentProduct, useRoute } from '@shopgate/engage/core';
import ProductSlider from '../../components/ProductSlider';
import { RECOMMENDATION_TYPE_CART, RECOMMENDATION_TYPE_PRODUCT } from '../../constants';

/**
 * Product slider on PDP page.
 * @param {string} productId Product id.
 * @returns {JSX}
 */
const ProductTaxDisclaimerAfter = ({ productId }) => {
  const { pathname } = useRoute();

  if (pathname === '/cart') {
    return (
      <ProductSlider type={RECOMMENDATION_TYPE_CART} />
    );
  }

  return (
    <ProductSlider type={RECOMMENDATION_TYPE_PRODUCT} id={productId} />
  );
};

ProductTaxDisclaimerAfter.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default withCurrentProduct(ProductTaxDisclaimerAfter);
