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
  settings: PropTypes.shape({
    h3: PropTypes.string,
    h2: PropTypes.string,
    background: PropTypes.string,
    textColor: PropTypes.string,
    limit: PropTypes.number,
    CTABackgroundColor: PropTypes.string,
    CTAColor: PropTypes.string,
    CTAText: PropTypes.string,
  }),
};

ProductSlider.defaultProps = {
  limit: undefined,
  settings: null,
  id: null,
};

export default ProductSlider;
