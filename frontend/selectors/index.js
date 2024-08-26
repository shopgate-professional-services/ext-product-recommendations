import { createSelector } from 'reselect';
import {
  RECOMMENDATION_TYPE_PRODUCT,
  RECOMMENDATION_TYPE_USER,
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
  (_, props) => props.type,
  (_, props) => props.id,
  (_, props) => props.requestOptions,
  (recommendations, type, id, requestOptions) => {
    const recommByType = recommendations[type];

    if (!recommByType) {
      return null;
    }

    if (id && requestOptions?.position) {
      return recommByType[id]?.positions?.[requestOptions.position];
    } if (id && type === RECOMMENDATION_TYPE_PRODUCT) {
      return recommByType[id] || null;
    }

    return recommByType || null;
  }
);

export const getRecommendationsForType = createSelector(
  getRecommendationsStateForType,
  (_, { limit }) => limit,
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
