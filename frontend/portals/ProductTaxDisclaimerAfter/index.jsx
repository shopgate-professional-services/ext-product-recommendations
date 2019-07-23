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
  const { productId } = useCurrentProduct();

  if (pathname === CART_PATH) {
    return (
      <ProductSlider type={RECOMMENDATION_TYPE_CART} />
    );
  }

  return (
    <ProductSlider type={RECOMMENDATION_TYPE_PRODUCT} id={productId} />
  );
};

export default ProductTaxDisclaimerAfter;
