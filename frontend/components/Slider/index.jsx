import React from 'react';
import { useTheme } from '@shopgate/engage/core';

const Slider = ({ products }) => {
    const { ProductSlider } = useTheme();

    if (!products) {
      return null;
    }

    return <ProductSlider productIds={products.map(p => p.id)} />;
};

export default Slider;
