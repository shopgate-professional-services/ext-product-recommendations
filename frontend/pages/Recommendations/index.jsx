import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@shopgate/engage/core';
import { Route } from '@shopgate/engage/components';
import connect from './connector';
import { RECOMMENDATIONS_PATH } from '../../constants';
import { recommendationsPage } from '../../config';
import Header from '../../components/Header';

/**
 * RecommendationsPage
 * @param {Object} props props
 * @return {JSX}
 */
const RecommendationsPage = (props) => {
  const {
    AppBar,
    View,
    ProductGrid,
    fetchUserRecommendations,
    products,
  } = props;
  return (
    <View>
      <AppBar title={recommendationsPage.pageTitle} />
      <Header
        h2={recommendationsPage.h2}
        h3={recommendationsPage.h3}
        background={recommendationsPage.background}
        textColor={recommendationsPage.textColor}
      />

      <ProductGrid
        handleGetProducts={fetchUserRecommendations}
        products={products || []}
        totalProductCount={products ? products.length : 0}
        requestHash=""
      />
    </View>
  );
};

RecommendationsPage.propTypes = {
  AppBar: PropTypes.func.isRequired,
  fetchUserRecommendations: PropTypes.func.isRequired,
  ProductGrid: PropTypes.func.isRequired,
  View: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()),
};

RecommendationsPage.defaultProps = {
  products: [],
};

export default () => (
  <Route pattern={RECOMMENDATIONS_PATH} component={withTheme(connect(RecommendationsPage))} />
);
