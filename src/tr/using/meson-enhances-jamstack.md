# Meson Jamstack'ı geliştirir

Jamstack, web deneyimi katmanını veri ve iş mantığından ayıran, esnekliği, ölçeklenebilirliği, performansı ve sürdürülebilirliği geliştiren bir mimari yaklaşımdır.

## Next.js

Bir CDN kurmak için bir varlık öneki ayarlayabilir ve [CDN](https://docs.meson.network/glossary.html#cdn-content-delivery-network)'nizin kaynağını Next.js'nin barındırıldığı domain'e çözümleyecek şekilde yapılandırabilirsiniz.

`next.config.js` dosyasını açın ve `assetPrefix` yapılandırmasını ekleyin:

```jsx
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://pz-xxxxxx.meson.network' : '',
}
```

Next.js, `/_next/` sekmesinden (`.next/static/` folder) yüklediği JavaScript ve CSS dosyaları için varlık önekinizi otomatik olarak kullanır.

[Dosya öneki CDN desteği - Next.js Dokümantasyon](https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix)

## Gatsby

**`gatsby-config.js`'ye ekleme**

```jsx
module.exports = {
  assetPrefix: `https://pz-xxxxxx.meson.network`,
}
```

Bir adım daha - bu uygulamayı oluşturduğunuzda, Gatsby'nin bu seçeneği seçmesi için bir işaret eklemeniz gerekir.

**Oluşum için ön eki etkinleştirmek**

`--prefix-paths` işaretini ekleyerek veya `PREFIX_PATHS ortam değişkenini ayarlayarak bir yapı için önek eklemeyi açıkça etkinleştirmelisiniz. Bu bayrak veya env değişkeni belirtilmezse, yapı bu seçeneği yok sayar ve içeriği aynı domain'de barındırılıyormuş gibi oluşturur. Başarılı bir şekilde oluşturduğunuzdan emin olmak için aşağıdakilerden birini yapın:

```jsx
gatsby build --prefix-paths
```

```jsx
PREFIX_PATHS=true gatsby build
```

[Dosya Öneki Ekleme - Gatsby Dokümantasyon](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/asset-prefix/)

## Webpack

```jsx
output: {
    publicPath: "https://pz-xxxxxx.meson.network/[fullhash]/",
  },
```

[CDN webpack.config.js - Webpack Dokümantasyon](https://webpack.js.org/loaders/html-loader/#cdn)