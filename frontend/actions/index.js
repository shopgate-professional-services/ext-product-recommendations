import { logger } from '@shopgate/pwa-core/helpers';
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { fetchProductsById } from '@shopgate/pwa-common-commerce/product';
import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import receiveProducts from '@shopgate/pwa-common-commerce/product/action-creators/receiveProducts';
import { getDummies } from '../selectors';
import {
  requestRecommendations,
  receiveRecommendations,
  errorRecommendations,
} from '../action-creators';
import {
  RECOMMENDATION_TYPE_CART,
  RECOMMENDATION_TYPE_PRODUCT,
  RECOMMENDATION_TYPE_USER,
} from '../constants';

/**
 * @param {string} id id
 * @param {Object} type type
 * @returns {Function}
 */
export const fetchRecommendations = (id = null, type) => (dispatch, getState) => {
  dispatch(requestRecommendations({ id, type }));

  new PipelineRequest('shopgate.getProductRecommendations')
    .setInput({ id, type })
    .dispatch()
    .then(({ products }) => {
      dispatch(receiveRecommendations({ id, type, products }));
      const productIds = products.map(product => product.id);
      dispatch(fetchProductsById(productIds));

      // dispatch(receiveProducts({
      //   hash: '',
      //   requestParams: {},
      //   products,
      //   totalResultCount: products.length,
      //   cached: false,
      // }));
    })
    .catch((err) => {
      logger.error(err);
      dispatch(errorRecommendations({ id, type }));
    });
};

export const fetchUserRecommendations = () => (dispatch) => {
  dispatch(fetchRecommendations(RECOMMENDATION_TYPE_USER));
};
