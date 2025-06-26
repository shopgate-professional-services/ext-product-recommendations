import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import Slider from '../Slider';
import withRecommendations from '../../connectors/withRecommendations';

/**
 * The ProductList component renders either a grid or a slider of products based on the variant
 * prop.
 * @param {Object} props The component props
 * @param {"slider"|"list"} props.variant The variant of the product list, either 'slider' or 'list'
 * @returns {JSX.Element}
 */
const ProductList = ({
  variant,
  type,
  id,
  limit,
  settings,
  requestOptions,
}) => {
  const ConnectedProductList = useMemo(() => withRecommendations(
    variant === 'slider' ? Slider : List,
    {
      type,
      id,
      limit,
      settings,
      requestOptions,
    }
  ), [id, limit, requestOptions, settings, type, variant]);

  return (
    <ConnectedProductList />
  );
};

ProductList.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  limit: PropTypes.number,
  requestOptions: PropTypes.shape(),
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
  variant: PropTypes.oneOf(['slider', 'list']),
};

ProductList.defaultProps = {
  variant: 'slider',
  limit: undefined,
  requestOptions: null,
  settings: null,
  id: null,
};

export default ProductList;

