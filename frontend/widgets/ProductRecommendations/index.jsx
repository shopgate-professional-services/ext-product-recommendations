import React from 'react';
import PropTypes from 'prop-types';
import ProductSlider from '../../components/ProductSlider';
import { RECOMMENDATION_TYPE_USER } from '../../constants';

/**
 * @returns {JSX}
 */
const ProductRecommendations = ({
  settings,
}) => {
  const {
    limit,
  } = settings;

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
