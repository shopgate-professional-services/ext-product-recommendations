import { connect } from 'react-redux';
import { historyPush } from '@shopgate/engage/core';
import { RECOMMENDATIONS_PATH } from '../../constants';
import { getUserRecommendations } from '../../selectors';
import { fetchRecommendations } from '../../actions';

/**
 * @param {Function} dispatch dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => ({
  fetchRecommendations,
  navigate: () => dispatch(historyPush({
    pathname: RECOMMENDATIONS_PATH,
  })),
});

export default connect(null, mapDispatchToProps);
