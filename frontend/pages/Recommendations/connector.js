import { connect } from 'react-redux';
import { fetchUserRecommendations } from '../../actions';
import { getUserRecommendations } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  products: getUserRecommendations(state),
});

/**
 * Maps dispatch to props.
 * @param {function} dispatch Dispatch.
 * @returns {Object}
 */
const mapDispatchToProps = ({
  fetchUserRecommendations,
});

export default connect(mapStateToProps, mapDispatchToProps);
