import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@shopgate/engage/core';
import connect from './connector';

/**
 * @param {Object} settings Settings passed from widget
 * @returns {JSX}
 */
const CMSProductRecommendations = ({
  settings,
  fetchRecommendations,
  userRecommendedProducts,
}) => {
  if (!settings) { return null; }
  const { ProductSlider } = useTheme();
  const {
    h3Title,
    h2Text,
    productLimit,
  } = settings;

  useEffect(() => {
    fetchRecommendations('001', 'user');
  }, []);
  const render = !userRecommendedProducts || userRecommendedProducts.isFetching === true ?
    null :
    (
      <div>
        {h3Title && (<h3>{h3Title}</h3>)}
        {h2Text && (<h2>{h2Text}</h2>)}
        <ProductSlider
          slidesPerView={2.3}
          productIds={userRecommendedProducts.productIds}
        />
      </div>
    );
  return (
    render
  );
};

CMSProductRecommendations.propTypes = {
  fetchRecommendations: PropTypes.func.isRequired,
  settings: PropTypes.shape(),
  userRecommendedProducts: PropTypes.shape(),
};

CMSProductRecommendations.defaultProps = {
  settings: null,
  userRecommendedProducts: null,
};

export default connect(CMSProductRecommendations);
