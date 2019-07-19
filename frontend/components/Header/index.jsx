import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * Header
 * @param {Object} props props
 * @return {JSX}
 */
const Header = ({
  h2, h3, background, textColor,
}) => {
  if (!(h3 || h2)) {
    return null;
  }

  return (
    <div className={styles.wrapper(background, textColor)}>
      {h3 && (<h3 className={styles.h3}>{h3}</h3>)}
      {h2 && (<h2 className={styles.h2}>{h2}</h2>)}
    </div>
  );
};

Header.propTypes = {
  background: PropTypes.string,
  h2: PropTypes.string,
  h3: PropTypes.string,
  textColor: PropTypes.string,
};

Header.defaultProps = {
  background: '',
  h2: '',
  h3: '',
  textColor: '',
};

export default Header;
