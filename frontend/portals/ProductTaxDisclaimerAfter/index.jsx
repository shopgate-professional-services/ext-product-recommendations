import React from 'react';
import PropTypes from 'prop-types';
import { withPageProductId } from '@shopgate-ps/pwa-extension-kit/connectors';
import ProductSlider from '../../components/ProductSlider';
import { RECOMMENDATION_TYPE_PRODUCT } from '../../constants';

/**
 * Product slider on PDP page.
 * @param {string} productId Product id.
 * @returns {JSX}
 */
const ProductTaxDisclaimerAfter = ({ productId }) => (
  <ProductSlider type={RECOMMENDATION_TYPE_PRODUCT} id={productId} />
);

ProductTaxDisclaimerAfter.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default withPageProductId(ProductTaxDisclaimerAfter);
