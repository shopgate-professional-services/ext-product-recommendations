import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../Slider';
import withRecommendations from '../../connectors/withRecommendations';

/**
 * General Product Slider component.
 * @param {string} type Type.
 * @param {string} id Id.
 * @param {Object} settings widget settings.
 * @returns {JSX}
 */
const ProductSlider = ({
  type, id, limit, settings,
}) => {
  const ConnectedSlider = withRecommendations(
    Slider,
    {
      type,
      id,
      limit,
      settings,
    }
  );

  return <ConnectedSlider />;
};

ProductSlider.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  limit: PropTypes.number,
  settings: PropTypes.shape(),
};

ProductSlider.defaultProps = {
  limit: undefined,
  settings: null,
  id: null,
};

export default ProductSlider;
