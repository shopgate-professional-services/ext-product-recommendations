import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentProduct, useRoute } from '@shopgate/engage/core';
import { CART_PATH } from '@shopgate/engage/cart';
import ProductSlider from '../../components/ProductSlider';
import { RECOMMENDATION_TYPE_CART, RECOMMENDATION_TYPE_PRODUCT } from '../../constants';
import { productPage, cartPage } from '../../config';

/**
 * Product slider on PDP page.
 * @returns {JSX}
 */
const Recommendations = ({ name }) => {
  const { pathname } = useRoute();

  // Cart Portal position is different than configured.
  if (pathname === CART_PATH && name === cartPage.position) {
    return (
      <ProductSlider type={RECOMMENDATION_TYPE_CART} />
    );
  }

  // PDP Portal position is different than configured.
  if (name !== productPage.position) {
    return null;
  }

  const { productId } = useCurrentProduct() || {};

  if (!productId) {
    return null;
  }

  return (
    <ProductSlider type={RECOMMENDATION_TYPE_PRODUCT} id={productId} />
  );
};

Recommendations.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Recommendations;
