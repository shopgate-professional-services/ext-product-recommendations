import { connect } from 'react-redux';
import { getUserRecommendations } from '../../selectors';
import { fetchRecommendations } from '../../actions';

/**
 * @param {Object} state app state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  userRecommendations: getUserRecommendations(state),
});

const mapDispatchToProps = ({
  fetchRecommendations,
});

export default connect(mapStateToProps, mapDispatchToProps);
