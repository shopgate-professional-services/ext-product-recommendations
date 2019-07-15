import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecommendationsForType } from '../selectors';
import { fetchRecommendations } from '../actions';

const WithRecommendations = ({
  type,
  id,
  WrappedComponent,
  products,
  fetchRecommendations,
  ...props
}) => {
  useEffect(() => {
    fetchRecommendations(type, id);
  }, [type, id]);

  return <WrappedComponent products={products} {...props} />;
};

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