import { logger } from '@shopgate/pwa-core/helpers';
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import receiveProducts from '@shopgate/pwa-common-commerce/product/action-creators/receiveProducts';
import { LoadingProvider } from '@shopgate/pwa-common/providers';
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
  RECOMMENDATIONS_PATH,
} from '../constants';

export const fetchRecommendations = (type, id = null) => (dispatch, getState) => {
  //const state = getState();
  //const dummies = getDummies(state, dummyId);
  //
  //if (!shouldFetchData(dummies)) {
  //  return;
  //}

  dispatch(requestRecommendations({ id, type }));

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

export const fetchUserRecommendations = () => async (dispatch) => {
  // TODO: re-fetch on user update
  LoadingProvider.setLoading(RECOMMENDATIONS_PATH);

  await dispatch(fetchRecommendations(RECOMMENDATION_TYPE_USER));

  LoadingProvider.unsetLoading(RECOMMENDATIONS_PATH);
};
