import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@shopgate/engage/core';
import { Route } from '@shopgate/engage/components';
import connect from './connector';
import { RECOMMENDATIONS_PATH } from '../../constants';
import config from '../../config';

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
        <AppBar title={config.pageTitle}/>

        <div>
          {config.pageH3 && (<h3>{config.pageH3}</h3>)}
          {config.pageH2 && (<h2>{config.pageH2}</h2>)}
          {/*  TODO: bg image */}
        </div>

        <h1>FOO</h1>

        <ProductGrid
          handleGetProducts={fetchUserRecommendations}
          products={products || []}
          totalProductCount={products ? products.length : 0}
          requestHash={''}
        />
      </View>
    );
  }
}

export default () => (<Route pattern={RECOMMENDATIONS_PATH} component={withTheme(connect(RecommendationsPage))} />);
