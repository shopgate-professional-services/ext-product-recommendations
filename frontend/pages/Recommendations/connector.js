import { connect } from 'react-redux';
import { fetchUserRecommendations } from '../../actions';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
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
