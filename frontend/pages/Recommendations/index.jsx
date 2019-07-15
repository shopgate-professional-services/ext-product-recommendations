import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@shopgate/engage/core';
import { Route } from '@shopgate/engage/components';
import connect from './connector';
import { RECOMMENDATIONS_PATH } from '../../constants';
import { recommendationsPage } from '../../config';
import styles from './style';
import Header from '../../components/Header';

class RecommendationsPage extends Component {
  static propTypes = {
    AppBar: PropTypes.func.isRequired,
    View: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  /**
   * Renders.
   * @returns {JSX}
   */
  render() {
    const {
      AppBar,
      View,
      ProductGrid,
      fetchUserRecommendations,
      products,
    } = this.props;
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
  }
}

export default () => (<Route pattern={RECOMMENDATIONS_PATH} component={withTheme(connect(RecommendationsPage))} />);
