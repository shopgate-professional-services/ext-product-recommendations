import { userDidLogin$, userDidLogout$ } from '@shopgate/engage/user';
import { remoteCartDidUpdate$ } from '@shopgate/pwa-common-commerce/cart/streams';
import { getCurrentPathname } from '@shopgate/pwa-common/selectors/router';
import { CART_PATH } from '@shopgate/pwa-common-commerce/cart/constants';
import { fetchRecommendations, fetchUserRecommendations } from '../actions';
import { clearRecommendations } from '../action-creators';
import { RECOMMENDATION_TYPE_CART } from '../constants';

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
};

export default recommendationSubscriptions;
