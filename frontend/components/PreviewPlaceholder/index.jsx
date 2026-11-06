import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@shopgate/engage/styles';
import { I18n } from '@shopgate/engage/components';

const useStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    minHeight: 130,
    padding: theme.spacing(2),
    border: '1px solid rgb(204, 204, 204)',
    background: 'rgb(242, 242, 242)',
    textAlign: 'center',
  },
  heading: {
    color: 'rgb(26, 26, 26)',
    fontWeight: 500,
    fontSize: '1rem',
  },
  hint: {
    color: 'rgb(128, 128, 128)',
    fontSize: '0.875rem',
  },
  detail: {
    color: 'rgb(128, 128, 128)',
    fontFamily: 'monospace',
    fontSize: '0.75rem',
    wordBreak: 'break-all',
  },
}));

/**
 * Stands in for a recommendation widget in the CMS page preview.
 * @param {Object} props The component props.
 * @param {string} props.name The configured widget name.
 * @returns {JSX.Element}
 */
const PreviewPlaceholder = ({ name }) => {
  const { cx, classes } = useStyles();

  return (
    <div className={cx(classes.root, 'productRecommendations__preview-placeholder')}>
      <div className={classes.heading}>
        <I18n.Text string="productRecommendations.previewPlaceholder.title" />
      </div>
      <div className={classes.hint}>
        <I18n.Text string="productRecommendations.previewPlaceholder.hint" />
      </div>
      {name ? (
        <div className={classes.detail}>
          <I18n.Text
            string="productRecommendations.previewPlaceholder.detail"
            params={{ value: name }}
          />
        </div>
      ) : null}
    </div>
  );
};

PreviewPlaceholder.propTypes = {
  name: PropTypes.string,
};

PreviewPlaceholder.defaultProps = {
  name: '',
};

export default PreviewPlaceholder;
