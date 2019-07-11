import { createSelector } from 'reselect';
import { REDUX_NAMESPACE_RECOMMENDATIONS_BY_TYPE } from '../constants';

/**
 * @param {Object} state state
 * @return {Object}
 */
export const getUserRecommendedProductsState = state =>
  state.extensions[REDUX_NAMESPACE_RECOMMENDATIONS_BY_TYPE];

export const getUserRecommendedProducts = createSelector(
  getUserRecommendedProductsState,
  ({ user }) => user
);
