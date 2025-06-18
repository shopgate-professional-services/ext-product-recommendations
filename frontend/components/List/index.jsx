import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@shopgate/engage/core';
import ProductListContainer from '../ProductListContainer';

/**
 * List component.
 * @param {Object} props props
 * @returns {JSX}
 */
const List = ({
  products,
  type,
  settings,
  id,
  requestOptions,
}) => {
  const { ProductGrid } = useTheme();

  if (!products || !products.length) {
    return null;
  }

  return (
    <ProductListContainer
      type={type}
      settings={settings}
      requestOptions={requestOptions}
    >
      <ProductGrid
        products={products}
        infiniteLoad={false}
        scope="productRecommendations"
        meta={{
          isRecommendation: true,
          recommendationScope: {
            id,
            type,
            requestOptions,
          },
        }}
      />
    </ProductListContainer>
  );
};

List.propTypes = {
  id: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })),
  requestOptions: PropTypes.shape(),
  settings: PropTypes.shape(),
  type: PropTypes.string,
};

List.defaultProps = {
  products: null,
  type: null,
  settings: null,
  id: null,
  requestOptions: null,
};

export default List;
