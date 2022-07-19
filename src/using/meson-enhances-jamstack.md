# Meson enhance Jamstack

Jamstack is an architectural approach that decouples the web experience layer from data and business logic, improving flexibility, scalability, performance, and maintainability.

## Next.js

To set up a [CDN](https://docs.meson.network/glossary.html#cdn-content-delivery-network), you can set up an asset prefix and configure your CDN's origin to resolve to the domain that Next.js is hosted on.

Open `next.config.js` and add the `assetPrefix` config:

```jsx
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://pz-xxxxxx.meson.network' : '',
}
```

Next.js will automatically use your asset prefix for the JavaScript and CSS files it loads from the `/_next/` path (`.next/static/` folder).

[CDN Support with Asset Prefix - Next.js Docs](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix)

## Gatsby

**Adding to `gatsby-config.js`**

```jsx
module.exports = {
  assetPrefix: `https://pz-xxxxxx.meson.network`,
}
```

One more step - when you build out this application, you need to add a flag so that Gatsby picks up this option.

**Enable prefixing for builds**

You must explicitly enable prefixing for a build by either adding the `--prefix-paths` flag or setting the `PREFIX_PATHS` environment variable. If this flag or env variable is not specified, the build will ignore this option, and build out content as if it was hosted on the same domain. To ensure you build out successfully, do one of the following:

```jsx
gatsby build --prefix-paths
```

```jsx
PREFIX_PATHS=true gatsby build
```

[Adding an Asset Prefix - Gatsby Docs](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/asset-prefix/)

## Webpack

```jsx
output: {
    publicPath: "https://pz-xxxxxx.meson.network/[fullhash]/",
  },
```

[CDN webpack.config.js - Webpack Docs](https://webpack.js.org/loaders/html-loader/#cdn)