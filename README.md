# Shopgate Connect - Extension product-recommendations
Extension will display retrieved product pipeline data from external providers. (ie. Boxalino, etc)

## Example widget Configuration
```
<!--Widget
{
  "type": "@shopgate-project/product-recommendations/ProductRecommendations",
  "settings": {
	"h3": "PRODUKTEMPFEHLUNGEN",
	"h2": "Deine personliche Auswahl",
	"background": "#fff",
	"textColor": "#000",
	"limit": 6,
	"CTABackgroundColor": "green",
	"CTAColor": "white",
	"CTAText": "Zu deinen Empfehlungen"
  }
}
-->
```

## Config

### recommendationsPage
Settings for the recommendation page

- `title`: the title of the page,
- `h2`: Headline H2 of the header,
- `h3`: Headline H3 of the header,
- `background`: CSS value for the background property of the header (e.g `#fff`, `url("header.png")`)
- `textColor`: Text color in the header (e.g `#000`)

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Cloud - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.

