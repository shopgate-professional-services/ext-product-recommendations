import {
  RECEIVE_RECOMMENDATIONS,
  REQUEST_RECOMMENDATIONS,
  ERROR_RECOMMENDATIONS,
  CLEAR_RECOMMENDATIONS,
} from '../constants';

/**
 * @param {Object} payload payload
 * @returns {Object}
 */
export const requestRecommendations = payload => ({
  type: REQUEST_RECOMMENDATIONS,
  payload,
});

/**
 * @param {Object} payload payload
 * @returns {Object}
 */
export const receiveRecommendations = payload => ({
  type: RECEIVE_RECOMMENDATIONS,
  payload,
});

/**
 * @param {Object} payload payload
 * @returns {Object}
 */
export const errorRecommendations = payload => ({
  type: ERROR_RECOMMENDATIONS,
  payload,
});

/**
 * @param {string} type type
 * @returns {Object}
 */
export const clearRecommendations = type => ({
  type: CLEAR_RECOMMENDATIONS,
  payload: {
    type,
    data: null,
  },
});
