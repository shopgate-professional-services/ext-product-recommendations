import React from 'react';
import { withPageProductId } from '@shopgate-ps/pwa-extension-kit/connectors';
import ProductSlider from '../../components/ProductSlider';

const ProductTaxDisclaimerAfter = ({ productId }) => {
  return <ProductSlider type="product" id={productId} />;
};

export default withPageProductId(ProductTaxDisclaimerAfter);
