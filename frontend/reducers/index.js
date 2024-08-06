import {
  ERROR_RECOMMENDATIONS,
  RECEIVE_RECOMMENDATIONS,
  REQUEST_RECOMMENDATIONS,
  RECOMMENDATION_TYPE_PRODUCT,
  RECOMMENDATION_TYPE_PAGE,
  CLEAR_RECOMMENDATIONS,
} from '../constants';

/**
 * Data Object
 * @param {Object} state state
 * @param {Object} payload incoming information
 * @param {Object} data data type
 * @returns {Object}
 */
const wrapData = (state, payload, data) => {
  const returnData = { ...state };

  if (
    payload.type === RECOMMENDATION_TYPE_PRODUCT &&
    payload.id &&
    payload.requestOptions &&
    payload.requestOptions.position
  ) {
    const { position } = payload.requestOptions;
    const existingProduct = state[payload.type]?.[payload.id] || {};
    const existingPositions = existingProduct.positions || {};

    returnData[payload.type] = {
      ...state[payload.type],
      [payload.id]: {
        ...existingProduct,
        positions: {
          ...existingPositions,
          [position]: {
            ...existingPositions[position],
            ...data,
          },
        },
      },
    };

    return returnData;
  }

  if (payload.id && payload.type === RECOMMENDATION_TYPE_PRODUCT) {
    returnData[payload.type] = {
      ...state[payload.type],
      [payload.id]: data,
    };

    return returnData;
  }

  if (
    payload.requestOptions &&
    payload.requestOptions.pattern &&
    payload.type === RECOMMENDATION_TYPE_PAGE
  ) {
    returnData[payload.type] = {
      ...state[payload.type],
      [payload.requestOptions.pattern]: data,
    };

    return returnData;
  }

  returnData[payload.type] = {
    ...data,
  };

  return returnData;
};

/**
 * @param {Obect} state  State
 * @param {Object} Action Action
 * @returns {Object}
 */
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
    case CLEAR_RECOMMENDATIONS:
      return wrapData(state, payload, {
        isFetching: false,
        expires: 0,
      });
    default:
      return state;
  }
};

export default recommendationsByType;
