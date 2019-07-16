import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@shopgate/engage/components';
import ProductSlider from '../../components/ProductSlider';
import connect from './connector';
import { RECOMMENDATION_TYPE_CMS } from '../../constants';
import styles from './style';

/**
 * @returns {JSX}
 */
const CMSProductRecommendations = ({
  navigate,
  settings,
}) => {
  if (!settings) { return null; }
  const {
    h3Title,
    h2Text,
    productLimit,
    CTABackgroundColor,
    CTAColor,
    CTAText,
  } = settings;
  return (
    <div>
      {h3Title && (<h3 className={styles.h3}>{h3Title}</h3>)}
      {h2Text && (<h2 className={styles.h2}>{h2Text}</h2>)}
      <ProductSlider type={RECOMMENDATION_TYPE_CMS} id="cms" productLimit={productLimit} />
      <Button
        className={styles.button(CTABackgroundColor, CTAColor)}
        onClick={() => navigate()}
      >
        {CTAText}
      </Button>
    </div>
  );
};
CMSProductRecommendations.propTypes = {
  navigate: PropTypes.func,
  settings: PropTypes.shape(),
};

CMSProductRecommendations.defaultProps = {
  navigate: () => { },
  settings: null,
};

export default connect(CMSProductRecommendations);
