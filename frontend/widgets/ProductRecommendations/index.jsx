import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useRoute } from '@shopgate/engage/core';
import ProductList from '../../components/ProductList';
import { RECOMMENDATION_TYPE_USER, RECOMMENDATION_TYPE_PAGE } from '../../constants';
import { requestOptions as requestOptionsConfig } from '../../config';

/**
 * @returns {JSX}
 */
const ProductRecommendations = ({
  settings,
  id,
}) => {
  const {
    limit,
    name,
    type = 'slider',
  } = settings;
  const { pathname } = useRoute();

  const pageWidgetRequestOptions = useMemo(() => {
    if (
      (!Array.isArray(requestOptionsConfig) || requestOptionsConfig.length === 0) &&
      !settings?.requestOptions
    ) {
      // No request options - no config for page widgets
      return null;
    }
    // Check if the request options array contains a config for the current widget
    let requestOptions = requestOptionsConfig.find(option => option.position === 'widget' &&
      option.pattern === pathname &&
      option.widgetName === name);

    // Check if the widget settings contain a request options object
    if (!requestOptions && settings?.requestOptions) {
      ({ requestOptions } = settings);
    }

    if (!requestOptions) {
      // No matching request option - no config for page widgets
      return null;
    }

    return {
      ...requestOptions,
      limit: settings?.limit,
      // Use the widget id as "position" - will be used by the reducer / selectors to distinct
      // multiple widgets at the same page.
      position: id,
    };
  }, [id, name, pathname, settings]);

  if (pageWidgetRequestOptions) {
    return (
      <ProductList
        variant={type === 'list' ? 'list' : 'slider'}
        type={RECOMMENDATION_TYPE_PAGE}
        limit={limit}
        settings={settings}
        requestOptions={pageWidgetRequestOptions}
        // Use the page-pattern as "id" - will be used the create sub-states inside the "page" state
        id={pageWidgetRequestOptions?.pattern || pathname || id}
      />
    );
  }

  return (
    <ProductList
      variant={type === 'list' ? 'list' : 'slider'}
      type={RECOMMENDATION_TYPE_USER}
      limit={limit}
      settings={settings}
    />
  );
};

ProductRecommendations.propTypes = {
  id: PropTypes.string.isRequired,
  settings: PropTypes.shape(),
};

ProductRecommendations.defaultProps = {
  settings: null,
};

export default ProductRecommendations;
