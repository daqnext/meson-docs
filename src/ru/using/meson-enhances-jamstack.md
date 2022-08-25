# Meson улучшает Джамстэк

Jamstack - это архитектурный подход, который отделяет слой веб-опыта от данных и бизнес-логики, повышая гибкость, масштабируемость, производительность и ремонтопригодность.

## Next.js

Чтобы настроить [CDN](https://docs.meson.network/glossary.html#cdn-content-delivery-network), вы можете задать префикс актива и настроить происхождение CDN на преобразование в домен, на котором размещен Next.js.


Откройте `next.config.js` и добавьте `assetPrefix` :

```jsx
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://pz-xxxxxx.meson.network' : '',
}
```

Next.js будет автоматически использовать ваш префикс asset для файлов JavaScript и CSS, которые он загружает из пути `/_next/` (папка `.next/static/`).

[CDN Support with Asset Prefix - Next.js Docs](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix)

## Gatsby

**Добавление в `gatsby-config.js`**

```jsx
module.exports = {
  assetPrefix: `https://pz-xxxxxx.meson.network`,
}
```

Еще один шаг - когда вы создадите это приложение, вам нужно добавить флаг, чтобы Gatsby выбрал эту опцию.

**Включить префиксацию для сборок**

Вы должны явно включить префиксацию для сборки, добавив флаг `--prefix-paths` или установив переменную окружения `PREFIX_PATHS`. Если этот флаг или переменная окружения не указаны, сборка проигнорирует эту опцию и будет собирать содержимое, как если бы оно было размещено на том же домене. Чтобы убедиться, что сборка прошла успешно, выполните одно из следующих действий:

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