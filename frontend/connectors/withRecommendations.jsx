import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecommendationsForType } from '../selectors';
import { fetchRecommendations } from '../actions';

// eslint-disable-next-line require-jsdoc
const WithRecommendations = ({
  type,
  id,
  limit,
  WrappedComponent,
  products,
  // eslint-disable-next-line no-shadow
  fetchRecommendations,
  requestOptions,
  ...props
}) => {
  useEffect(() => {
    fetchRecommendations(type, id, requestOptions);
  }, [type, id, requestOptions, fetchRecommendations]);

  return (<WrappedComponent
    products={products}
    limit={limit}
    type={type}
    {...props}
  />);
};

WithRecommendations.propTypes = {
  fetchRecommendations: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  WrappedComponent: PropTypes.func.isRequired,
  id: PropTypes.string,
  limit: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
  requestOptions: PropTypes.shape(),
};

WithRecommendations.defaultProps = {
  limit: undefined,
  products: null,
  id: null,
  requestOptions: null,
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
