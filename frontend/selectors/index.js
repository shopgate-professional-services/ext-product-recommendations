import { createSelector } from 'reselect';
import {
  RECOMMENDATION_TYPE_PRODUCT,
  RECOMMENDATION_TYPE_USER,
  RECOMMENDATION_TYPE_PAGE,
} from '../constants';

const REDUX_NAMESPACE_RECOMMENDATIONS = '@shopgate-project/product-recommendations/recommendationsByType';

/**
 * Get the recommendations state.
 * @param {Object} state .
 * @returns {Object} The recommendations state.
 */
export const getRecommendationsState = state =>
  state.extensions[REDUX_NAMESPACE_RECOMMENDATIONS];

export const getRecommendationsStateForType = createSelector(
  getRecommendationsState,
  (state, props) => props.type,
  (state, props) => props.id,
  (state, props) => props.requestOptions,
  (recommendations, type, id, requestOptions) => {
    const recommByType = recommendations[type];

    if (!recommByType) {
      return null;
    }

    if (id && type === RECOMMENDATION_TYPE_PRODUCT) {
      return recommByType[id] || null;
    }

    if (requestOptions?.pattern && type === RECOMMENDATION_TYPE_PAGE) {
      return recommByType[requestOptions.pattern] || null;
    }

    return recommByType || null;
  }
);

export const getRecommendationsForType = createSelector(
  getRecommendationsStateForType,
  (state, { limit }) => limit,
  (recommendationsState, limit) =>
    (recommendationsState && recommendationsState.products ?
      recommendationsState.products.slice(0, limit) : null)
);

/**
 * Get recommendations for user.
 * @param {Object} state .
 * @returns {Array} List of user recommendations.
 */
export const getUserRecommendations = state =>
  getRecommendationsForType(state, { type: RECOMMENDATION_TYPE_USER });
