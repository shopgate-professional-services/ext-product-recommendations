import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@shopgate/engage/components';
import { useNavigation } from '@shopgate/engage/core';
import { css } from 'glamor';
import Header from '../Header';
import { RECOMMENDATIONS_PATH, RECOMMENDATION_TYPE_CART } from '../../constants';
import { productPage, cartPage } from '../../config';

const styles = {
  wrapper: css({
    padding: '1rem 0',
  }),
  button: (CTABackgroundColor, CTAColor) => css({
    display: 'block !important',
    backgroundColor: `${CTABackgroundColor} !important`,
    color: `${CTAColor} !important`,
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    marginTop: 10,
    marginBottom: 5,
  }).toString(),
};

/**
 * The ProductListContainer component wraps Slider and List components and provides a consistent
 * header and CTA button.
 * @param {Object} props The component props
 * @returns {JSX.Element}
 */
const ProductListContainer = ({
  type,
  children,
  settings,
  requestOptions,
}) => {
  const { push } = useNavigation();

  const headerProps =
    requestOptions?.header ||
    settings ||
    (type === RECOMMENDATION_TYPE_CART ? cartPage : productPage);

  const {
    CTABackgroundColor,
    CTAColor,
    CTAText,
  } = settings || {};

  return (
    <div className={styles.wrapper}>
      <Header {...headerProps} />
      {children}
      {CTAText && ((
        <Button
          className={styles.button(CTABackgroundColor, CTAColor)}
          onClick={() => push({ pathname: RECOMMENDATIONS_PATH })}
        >
          {CTAText}
        </Button>))
      }
    </div>
  );
};

ProductListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  requestOptions: PropTypes.shape(),
  settings: PropTypes.shape({
    h3: PropTypes.string,
    h2: PropTypes.string,
    background: PropTypes.string,
    textColor: PropTypes.string,
    limit: PropTypes.number,
    CTABackgroundColor: PropTypes.string,
    CTAColor: PropTypes.string,
    CTAText: PropTypes.string,
  }),
};

ProductListContainer.defaultProps = {
  requestOptions: null,
  settings: null,
};

export default ProductListContainer;

