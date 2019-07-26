import { createSelector } from 'reselect';
import {
  RECOMMENDATION_TYPE_PRODUCT,
  RECOMMENDATION_TYPE_USER,
} from '../constants';

const REDUX_NAMESPACE_RECOMMENDATIONS = '@shopgate-project/product-recommendations/recommendationsByType';

export const getRecommendationsState = state =>
  state.extensions[REDUX_NAMESPACE_RECOMMENDATIONS];

export const getRecommendationsStateForType = createSelector(
  getRecommendationsState,
  (state, props) => props.type,
  (state, props) => props.id,
  (recommendations, type, id) => {
    const recommByType = recommendations[type];

    if (!recommByType) {
      return null;
    }

    if (id && type === RECOMMENDATION_TYPE_PRODUCT) {
      return recommByType[id] || null;
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

export const getUserRecommendations = state =>
  getRecommendationsForType(state, { type: RECOMMENDATION_TYPE_USER });
