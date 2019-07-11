import {
  ERROR_RECOMMENDATIONS,
  RECEIVE_RECOMMENDATIONS,
  REQUEST_RECOMMENDATIONS,
  RECOMMENDATION_TYPE_PRODUCT,
} from '../constants';

const wrapData = (state, payload, data) => {
  const returnData = {
    ...state,
    [payload.type]: data,
  };

  if (payload.id && payload.type === RECOMMENDATION_TYPE_PRODUCT) {
    returnData[payload.type] = {
      ...state[payload.type],
      [payload.id]: data,
    };
  }

  return returnData;
};

const recommendationsByType = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case REQUEST_RECOMMENDATIONS:
      return wrapData(state, payload, {
        isFetching: true,
        expires: 0,
      });
    case RECEIVE_RECOMMENDATIONS:
      return wrapData(state, payload, {
        products: payload.products,
        isFetching: false,
        expires: Date.now() + 3600000,
      });
    case ERROR_RECOMMENDATIONS:
      return wrapData(state, payload, {
        isFetching: false,
        expires: 0,
      });
    default:
      return state;
  }
};

export default recommendationsByType;
