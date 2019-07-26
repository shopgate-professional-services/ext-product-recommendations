import React from 'react';
import { useCurrentProduct, useRoute } from '@shopgate/engage/core';
import { CART_PATH } from '@shopgate/engage/cart';
import ProductSlider from '../../components/ProductSlider';
import { RECOMMENDATION_TYPE_CART, RECOMMENDATION_TYPE_PRODUCT } from '../../constants';

/**
 * Product slider on PDP page.
 * @returns {JSX}
 */
const ProductTaxDisclaimerAfter = () => {
  const { pathname } = useRoute();

  if (pathname === CART_PATH) {
    return (
      <ProductSlider type={RECOMMENDATION_TYPE_CART} />
    );
  }

  const { productId } = useCurrentProduct() || {};

  if (!productId) {
    return null;
  }

  return (
    <ProductSlider type={RECOMMENDATION_TYPE_PRODUCT} id={productId} />
  );
};

export default ProductTaxDisclaimerAfter;
