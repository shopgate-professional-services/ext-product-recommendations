import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../Slider';
import withRecommendations from '../../connectors/withRecommendations';

/**
 * General Product Slider component.
 * @param {string} type Type.
 * @param {string} id Id.
 * @returns {JSX}
 */
const ProductSlider = ({ type, id }) => {
  const ConnectedSlider = withRecommendations(
    Slider,
    {
      type,
      id,
    }
  );

  return <ConnectedSlider />;
};

ProductSlider.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductSlider;
