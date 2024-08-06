import React from 'react';
import PropTypes from 'prop-types';
import { useRoute } from '@shopgate/engage/core';
import ProductSlider from '../../components/ProductSlider';
import { RECOMMENDATION_TYPE_USER, RECOMMENDATION_TYPE_PAGE } from '../../constants';
import { requestOptions } from '../../config';

/**
 * @returns {JSX}
 */
const ProductRecommendations = ({
  settings,
}) => {
  const {
    limit,
  } = settings;
  const { pathname } = useRoute();

  const hasRequestOptions =
    requestOptions &&
    Array.isArray(requestOptions) &&
    requestOptions.length > 0;

  // Use request options from config
  if (hasRequestOptions) {
    const widgetOptions = requestOptions.find(option => option.position === 'widget' && option.pattern === pathname);

    if (widgetOptions) {
      return (
        <ProductSlider
          type={RECOMMENDATION_TYPE_PAGE}
          limit={limit}
          settings={settings}
          requestOptions={widgetOptions}
        />
      );
    }
  }

  return (
    <ProductSlider type={RECOMMENDATION_TYPE_USER} limit={limit} settings={settings} />
  );
};
ProductRecommendations.propTypes = {
  settings: PropTypes.shape(),
};

ProductRecommendations.defaultProps = {
  settings: null,
};

export default ProductRecommendations;
