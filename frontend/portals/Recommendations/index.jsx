import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentProduct, useRoute } from '@shopgate/engage/core';
import { CART_PATH } from '@shopgate/engage/cart';
import { CATEGORY_PATTERN } from '@shopgate/engage/category';
import { SEARCH_PATTERN } from '@shopgate/engage/search';
import ProductSlider from '../../components/ProductSlider';
import {
  RECOMMENDATION_TYPE_CART,
  RECOMMENDATION_TYPE_PRODUCT,
  RECOMMENDATION_TYPE_PAGE,
  BROWSE_PATH,
} from '../../constants';
import { productPage, cartPage, requestOptions } from '../../config';

/**
 * Product slider on PDP page.
 * @returns {JSX}
 */
const Recommendations = ({ name }) => {
  const { pattern } = useRoute();

  const hasRequestOptions =
    requestOptions &&
    Array.isArray(requestOptions) &&
    requestOptions.length > 0;

  const { productId } = useCurrentProduct() || {};

  // Use request options from config
  if (hasRequestOptions) {
    const options = requestOptions.find(
      option => option.position === name && option.pattern === pattern
    );
    // Product lists
    if (
      options?.pattern === CATEGORY_PATTERN ||
      options?.pattern === BROWSE_PATH ||
      options?.pattern === SEARCH_PATTERN
    ) {
      return (
        <ProductSlider type={RECOMMENDATION_TYPE_PAGE} requestOptions={options} />
      );
    }

    // Cart page
    if (options?.pattern === CART_PATH) {
      return (
        <ProductSlider type={RECOMMENDATION_TYPE_CART} requestOptions={options} />
      );
    }

    if (!options || !productId) {
      return null;
    }

    // Product page
    if (options && productId) {
      return (
        <ProductSlider
          type={RECOMMENDATION_TYPE_PRODUCT}
          id={productId}
          requestOptions={options}
        />
      );
    }
  }

  // Cart Portal position is different than configured.
  if (pattern === CART_PATH && name === cartPage.position) {
    return (
      <ProductSlider type={RECOMMENDATION_TYPE_CART} />
    );
  }

  // PDP Portal position is different than configured.
  if (name !== productPage.position) {
    return null;
  }

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
