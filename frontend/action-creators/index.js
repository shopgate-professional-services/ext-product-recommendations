import {
  RECEIVE_RECOMMENDATIONS,
  REQUEST_RECOMMENDATIONS,
  ERROR_RECOMMENDATIONS,
} from '../constants';

export const requestRecommendations = payload => ({
  type: REQUEST_RECOMMENDATIONS,
  payload,
});

export const receiveRecommendations = payload => ({
  type: RECEIVE_RECOMMENDATIONS,
  payload,
});

export const errorRecommendations = payload => ({
  type: ERROR_RECOMMENDATIONS,
  payload,
});
