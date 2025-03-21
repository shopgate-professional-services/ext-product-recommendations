import {
  ERROR_RECOMMENDATIONS,
  RECEIVE_RECOMMENDATIONS,
  REQUEST_RECOMMENDATIONS,
  RECOMMENDATION_TYPE_PRODUCT,
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
  const returnData = {
    ...state,
    [payload.type]: data,
  };

  if (payload.id && payload?.requestOptions?.position) {
    const { position } = payload.requestOptions;
    const existingData = state[payload.type]?.[payload.id] || {};
    const existingPositions = existingData.positions || {};

    returnData[payload.type] = {
      ...state[payload.type],
      [payload.id]: {
        ...existingData,
        positions: {
          ...existingPositions,
          [position]: {
            ...existingPositions[position],
            ...data,
          },
        },
      },
    };
  } else if (payload?.requestOptions?.position) {
    const { position } = payload.requestOptions;
    const existingPositions = state[payload.type]?.positions || {};

    returnData[payload.type] = {
      ...state[payload.type],

      positions: {
        ...existingPositions,
        [position]: {
          ...existingPositions[position],
          ...data,
        },
      },
    };
  } else if (payload.id && payload.type === RECOMMENDATION_TYPE_PRODUCT) {
    returnData[payload.type] = {
      ...state[payload.type],
      [payload.id]: data,
    };
  }

  return returnData;
};

/**
 * @param {Object} state  State
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
    case RECEIVE_RECOMMENDATIONS: {
      let expiryModifier = 3600;

      if (typeof payload.cacheTTL !== 'undefined') {
        expiryModifier = payload.cacheTTL;
      }

      return wrapData(state, payload, {
        products: payload.products,
        isFetching: false,
        expires: Date.now() + (expiryModifier * 1000),
      });
    }

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
