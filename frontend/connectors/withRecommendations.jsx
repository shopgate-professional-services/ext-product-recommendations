import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecommendationsForType, getRecommendationsStateForType } from '../selectors';
import { fetchRecommendations } from '../actions';
import { RECOMMENDATION_TYPE_PRODUCT } from '../constants';

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
  state,
  ...props
}) => {
  useEffect(() => {
    fetchRecommendations(type, id, requestOptions);
  }, [type, id, requestOptions, fetchRecommendations]);

  // This ensures that the recommendations will be fetched again is the data is expired
  useEffect(() => {
    if (state && !state.isFetching && state.expires === 0 && type === RECOMMENDATION_TYPE_PRODUCT) {
      fetchRecommendations(type, id, requestOptions);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.isFetching, state?.expires, type]);

  return (<WrappedComponent
    products={products}
    limit={limit}
    type={type}
    id={id}
    requestOptions={requestOptions}
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
  state: getRecommendationsStateForType(state, { type: props.type }),
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
