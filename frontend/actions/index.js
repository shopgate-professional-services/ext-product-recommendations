import { logger } from '@shopgate/pwa-core/helpers';
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { fetchProductsById } from '@shopgate/pwa-common-commerce/product';
import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import receiveProducts from '@shopgate/pwa-common-commerce/product/action-creators/receiveProducts';
import { LoadingProvider } from '@shopgate/pwa-common/providers';
import { getRecommendationsStateForType } from '../selectors';
import {
  requestRecommendations,
  receiveRecommendations,
  errorRecommendations,
} from '../action-creators';
import {
  RECOMMENDATION_TYPE_CART,
  RECOMMENDATION_TYPE_PRODUCT,
  RECOMMENDATION_TYPE_USER,
  RECOMMENDATIONS_PATH,
} from '../constants';

/**
 * @param {string} type type to request
 * @param {string} id id
 * @param {number} productLimit product limit for slider
 * @returns {Function}
 */
export const fetchRecommendations = (type, id = null, productLimit = null) => (dispatch, getState) => {
  const state = getState();
  const recommendations = getRecommendationsStateForType(state, { type, id });

  if (!shouldFetchData(recommendations)) {
    return;
  }

  dispatch(requestRecommendations({ id, type }));

  // eslint-disable-next-line consistent-return
  return new PipelineRequest('shopgate.getProductRecommendations')
    .setInput({ id, type })
    .dispatch()
    .then(({ products }) => {
      dispatch(receiveRecommendations({ id, type, products }));
      dispatch(receiveProducts({
        products,
      }));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorRecommendations({ id, type }));
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
