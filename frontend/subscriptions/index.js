import { userDidLogin$, userDidLogout$ } from '@shopgate/engage/user';
import { fetchUserRecommendations } from '../actions';

/**
 * Subscriptions
 * @param {Function} subscribe Subscribe.
 */
const recommendationSubscriptions = (subscribe) => {
  subscribe(userDidLogin$.merge(userDidLogout$), ({ dispatch }) => {
    dispatch(fetchUserRecommendations());
  });
};

export default recommendationSubscriptions;
