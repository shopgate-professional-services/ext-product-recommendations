import React, { Fragment, useEffect } from 'react';
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
  userRecommendations,
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
  const render = !userRecommendations ?
    null :
    (
      <Fragment>
        {h3Title && (<h3>{h3Title}</h3>)}
        {h2Text && (<h2>{h2Text}</h2>)}
        <div>
          <ProductSlider
            autoplay
            delay={7000}
            productIds={userRecommendations.map(product => product.id)}
          />
        </div>
      </Fragment>
    );
  return (
    render
  );
};

CMSProductRecommendations.propTypes = {
  fetchRecommendations: PropTypes.func.isRequired,
  settings: PropTypes.shape(),
  userRecommendations: PropTypes.arrayOf(PropTypes.shape()),
};

CMSProductRecommendations.defaultProps = {
  settings: null,
  userRecommendations: null,
};

export default connect(CMSProductRecommendations);
