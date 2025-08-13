import { userDidLogin$, userDidLogout$ } from '@shopgate/engage/user';
import { remoteCartDidUpdate$ } from '@shopgate/pwa-common-commerce/cart/streams';
import { getCurrentPathname } from '@shopgate/pwa-common/selectors/router';
import { CART_PATH } from '@shopgate/pwa-common-commerce/cart/constants';
import { productDataExpired$ } from '@shopgate/engage/product';
import { fetchRecommendations, fetchUserRecommendations } from '../actions';
import { clearRecommendations, expireRecommendations } from '../action-creators';
import { RECOMMENDATION_TYPE_CART, RECOMMENDATION_TYPE_PRODUCT } from '../constants';

/**
 * Subscriptions
 * @param {Function} subscribe Subscribe.
 */
const recommendationSubscriptions = (subscribe) => {
  subscribe(userDidLogin$.merge(userDidLogout$), ({ dispatch }) => {
    dispatch(fetchUserRecommendations());
  });

  subscribe(remoteCartDidUpdate$, ({ dispatch, getState }) => {
    dispatch(clearRecommendations(RECOMMENDATION_TYPE_CART));

    const pathname = getCurrentPathname(getState());

    if (pathname === CART_PATH) {
      // we need to re-fetch in case the cart page is visible at this point
      dispatch(fetchRecommendations(RECOMMENDATION_TYPE_CART));
    }
  });

  subscribe(productDataExpired$, ({ dispatch }) => {
    dispatch(clearRecommendations(RECOMMENDATION_TYPE_PRODUCT));
  });
};

export default recommendationSubscriptions;
