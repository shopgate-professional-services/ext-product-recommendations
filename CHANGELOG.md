# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 1.5.1
## Added
- Support for multiple slider titles on the same page via additional `header` property inside `requestOptions` entries

## 1.5.0
## Added
- The extension now supports fetching recommendations through an asynchronous function provided by a recommendations provider extension, as an alternative to a pipeline request.

### Example
```js
import { appWillInit$ } from '@shopgate/engage/core/streams';
import { configuration } from '@shopgate/engage/core/collections';

export default (subscribe) => {
  subscribe(appWillInit$, ({ getState }) => {
    // Register an async recommendations handler that will be invoked by the @shopgate-project/product-recommendations extension
    configuration.set('EXT_PRODUCT_RECOMMENDATIONS_HANDLER', async ({ id, type, requestOptions = {} }) => {
      // Parse input parameters
      // Retrieve additional data from Redux via selectors invoked with getState()
      // await request to recommendations provider
      return {
        products: [], // Products in `shopgate.catalog.getProducts` pipeline response format
        cacheTTL: 60 // Optional cache time in seconds
      };
    });
  });
}
```

## 1.4.0 - 2024-06-21
## Added
- Set ProductSlider.meta which is needed for tracking

## 1.3.1 - 2024-08-26
## Added
- Support for multiple recommendation widgets on "pages"

## 1.3.0 - 2024-06-27
## Added
- Options to customize the `getProductRecommendations` request

## 1.2.1 - 2020-01-22
### Fixed
- Re-fetch recommendations when cart updates

## 1.2.0 - 2019-10-24
## Fixed
* Removed timeout workaround since it is no longer needed as of PWA 6.8+

## 1.1.2 - 2019-09-19
### Fixed
* Added timeout to allow react-id-swiper to apply styling on PDP

## 1.1.1 - 2019-09-17
### Changed
- Changed styling (spaces between Header and CTA Button).

## 1.1.0 - 2019-09-05
### Added
- Configurable portal positions

## 1.0.1 - 2019-08-19
### Fixed
- Set PWA dependency to 6.7

## 1.0.0 - 2019-07-26
### Added
- First implementation
- Added configurable widget to display Recommended product slider teaser and contains a button link to recommendations page.
