import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecommendationsForType } from '../selectors';
import { fetchRecommendations } from '../actions';

// eslint-disable-next-line require-jsdoc
const WithRecommendations = ({
  type,
  id,
  productLimit,
  WrappedComponent,
  products,
  // eslint-disable-next-line no-shadow
  fetchRecommendations,
  ...props
}) => {
  useEffect(() => {
    fetchRecommendations(type, id);
  }, [type, id]);
  return (<WrappedComponent
    products={products}
    productLimit={productLimit}
    type={type}
    {...props}
  />);
};

WithRecommendations.propTypes = {
  fetchRecommendations: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  WrappedComponent: PropTypes.func.isRequired,
  productLimit: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};

WithRecommendations.defaultProps = {
  productLimit: null,
  products: null,
};

/**
 * Maps state to props.
 * @param {Object} state State.
 * @param {Object} props Props.
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  products: getRecommendationsForType(state, props),
});

/**
 * Maps dispatch to props.
 * @param {function} dispatch Dispatch.
 * @returns {Object}
 */
const mapDispatchToProps = ({
  fetchRecommendations,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const ConnectedWithRecommendations = connector(WithRecommendations);

export default (WrappedComponent, options) =>
  props =>
    <ConnectedWithRecommendations WrappedComponent={WrappedComponent} {...props} {...options} />;
