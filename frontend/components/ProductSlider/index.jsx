import React from 'react';
import Slider from '../Slider';
import withRecommendations from '../../connectors/withRecommendations';

const ProductSlider = ({ type, id }) => {
  const ConnectedSlider = withRecommendations(Slider, { type, id });

  return (
    <div>
      <span>headline</span>
      <ConnectedSlider />
    </div>
  );
};

export default ProductSlider;
