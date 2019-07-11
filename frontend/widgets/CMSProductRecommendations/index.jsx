import React from 'react';
import PropTypes from 'prop-types';
import ProductSlider from '../../components/ProductSlider';

/**
 * @param {Object} settings Settings passed from widget
 * @returns {JSX}
 */
const CMSProductRecommendations = ({ settings }) => {
  if (!settings) { return null; }
  const {
    text,
    headlineTag,
    productLimit,
    textColor,
  } = settings;
  const styles = {
    color: textColor,
  };
  const headline = headlineTag === 'h2' ? (
    <h2 style={styles}>{text}</h2>
  ) : (
    <h3 style={styles}>{text}</h3>
  );

  return (
    headline,
      <ProductSlider />
  );
};

CMSProductRecommendations.propTypes = {
  settings: PropTypes.shape(),
};

CMSProductRecommendations.defaultProps = {
  settings: null,
};

export default CMSProductRecommendations;
