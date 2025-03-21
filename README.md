# Shopgate Connect - Extension product-recommendations
Extension will display retrieved product pipeline data from external providers. (ie. Boxalino, etc)

## Example widget Configuration
```
<!--Widget
{
  "type": "@shopgate-project/product-recommendations/ProductRecommendations",
  "settings": {
    "name": "example-campaign-4",
    "h3": "PRODUKTEMPFEHLUNGEN",
    "h2": "Deine<br> persönliche<br> Auswahl",
    "background": "#fff",
    "textColor": "#000",
    "limit": 6,
    "CTABackgroundColor": "green",
    "CTAColor": "white",
    "CTAText": "Zu deinen Empfehlungen",
    "requestOptions": {
      "parameter_1": [
        "requestOptions property is completely optional"
      ],
      "parameter_2": "CATEGORY",
    }
  }
}
-->
```

## Config

### recommendationsPage, cartPage and productPage config
Settings for the recommendation page

- `title`: the title of the page (only for recommendationsPage)
- `h2`: Headline H2 of the header. You can use html markup here like <br> to force a line break.
- `h3`: Headline H3 of the header. You can use html markup here like <br> to force a line break
- `background`: CSS value for the background property of the header (e.g `#fff`, `url("header.png")`)
- `textColor`: Text color in the header (e.g `#000`)
- `position`: Portal position. If empty no slider is rendered on Product or Cart Page.<br>Possible portal positions:<br>
	- `product.header.after`
	- `product.description.after`
	- `product.reviews.after`
	- `cart.coupon-field.before`
	- `cart.coupon-field.after`
- `requestOptions` (optional): Options to customize the `getProductRecommendations` request and the portal positions. If this array is set, the other configs for `recommendationsPage`, `cartPage` and `productPage` will be ignored. For each option, `position` and `pattern` are mandatory. The `widgetName` key is required as soon as a option has the value `widget` for the `position` key. Its value must match the widget setting `name`.
When multiple sliders are configured for a single page, their headers can be customized via an optional `header` property. Its value is an object with the properties `h2`, `h3`, `background` and `textColor`.
<br>
Possible portal positions:
	- `product.header.after`,
	- `product.description.before`,
	- `product.description.after`,
	- `product.properties.before`,
	- `product.properties.after`,
	- `product.reviews.before`,
	- `product.reviews.after`
	- `cart.coupon-field.before`,
	- `cart.coupon-field.after`,
	- `cart.empty.before`,
	- `cart.empty.after`
	- `category.list.before`,
	- `category.list.after`,
	- `product.list.before`,
	- `product.list.after`,
	- `browse.category-list.before`,
	- `browse.category-list.after`,
	- `no-results.content.before`,
	- `no-results.content.after`

## Config example with request options:
```json
{
  "recommendationsPage": {
    "title": "",
    "h2": "",
    "h3": "",
    "background": "",
    "textColor": ""
  },
  "productPage": {
    "h2": "",
    "h3": "",
    "background": "",
    "textColor": "",
    "position": ""
  },
  "cartPage": {
    "h2": "",
    "h3": "",
    "background": "",
    "textColor": "",
    "position": ""
  },
  "requestOptions": [
    {
      "parameter_1": [
        "Example campaign 1"
      ],
      "parameter_2": "CATEGORY",
      "position": "product.list.before",
      "pattern": "/category/:categoryId"
    },
    {
      "parameter_1": [
        "Example campaign 2"
      ],
      "parameter_2": "EMPTY_CART",
      "position": "cart.empty.before",
      "pattern": "/cart"
    },
    {
      "parameter_1": [
        "Example campaign 3"
      ],
      "parameter_2": "PRODUCT",
      "position": "product.properties.before",
      "pattern": "/item/:productId",
      "header": {
        "h2": "Custom header for product page slider",
        "h3": "",
        "background": "",
        "textColor": ""
      }
    },
    {
      "parameter_1": [
        "Example campaign 4"
      ],
      "parameter_2": "CMS",
      "position": "widget",
      "pattern": "/page/sales",
      "widgetName": "example-campaign-4"
    },
    {
      "parameter_1": [
        "Example campaign 5"
      ],
      "parameter_2": "CMS",
      "position": "widget",
      "pattern": "/page/sales",
      "widgetName": "example-campaign-5"
    }
  ]
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Cloud - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.

