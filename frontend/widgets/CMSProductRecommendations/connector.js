import { connect } from 'react-redux';
import { getUserRecommendedProducts } from '../../selectors';
import { fetchRecommendations } from '../../actions';

/**
 * @param {Object} state app state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  userRecommendedProducts: getUserRecommendedProducts(state),
});

const mapDispatchToProps = ({
  fetchRecommendations,
});

export default connect(mapStateToProps, mapDispatchToProps);
