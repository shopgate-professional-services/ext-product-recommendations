import { logger } from '@shopgate/pwa-core/helpers';
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import receiveProducts from '@shopgate/pwa-common-commerce/product/action-creators/receiveProducts';
import { LoadingProvider } from '@shopgate/pwa-common/providers';
import { configuration } from '@shopgate/engage/core';
import { getRecommendationsStateForType } from '../selectors';
import {
  requestRecommendations,
  receiveRecommendations,
  errorRecommendations,
} from '../action-creators';
import {
  RECOMMENDATION_TYPE_USER,
  RECOMMENDATIONS_PATH,
} from '../constants';

/**
 * @param {string} type type to request
 * @param {string} id id
 * @param {Object} requestOptions options to customize the request
 * @returns {Function}
 */
export const fetchRecommendations = (type, id = null, requestOptions = null) =>
  (dispatch, getState) => {
    const state = getState();

    const recommendations = getRecommendationsStateForType(state, {
      type,
      id,
      requestOptions,
    });

    if (recommendations && !shouldFetchData(recommendations)) {
      return Promise.resolve();
    }

    dispatch(requestRecommendations({
      id,
      type,
      requestOptions,
    }));

    const inputParams = {
      id,
      type,
      ...(requestOptions && { requestOptions }),
    };

    // Check if an extension registered a handler function as alternative for a pipeline request
    const handlerFn = configuration.get('EXT_PRODUCT_RECOMMENDATIONS_HANDLER');

    let request;

    if (handlerFn) {
      request = handlerFn(inputParams);
    } else {
      request = new PipelineRequest('shopgate.getProductRecommendations')
        .setInput(inputParams)
        .dispatch();
    }

    return request
      .then(({ products, cacheTTL }) => {
        dispatch(receiveRecommendations({
          id,
          type,
          products,
          requestOptions,
          cacheTTL,
        }));
        dispatch(receiveProducts({
          products,
        }));
      })
      .catch((err) => {
        logger.error(err);
        dispatch(errorRecommendations({
          id,
          type,
        }));
      });
  };

/**
 * @returns {Function}
 */
export const fetchUserRecommendations = () => async (dispatch) => {
  LoadingProvider.setLoading(RECOMMENDATIONS_PATH);

  await dispatch(fetchRecommendations(RECOMMENDATION_TYPE_USER));

  LoadingProvider.unsetLoading(RECOMMENDATIONS_PATH);
};
