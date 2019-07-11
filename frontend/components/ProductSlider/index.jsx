import React from 'react';
import { useTheme } from '@shopgate/engage/core';

/**
 * @returns {JSX}
 */
const Slider = () => {
  const { ProductSlider } = useTheme();

  return (
    <ProductSlider />
  );
};

export default Slider;
