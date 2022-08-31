# Tüm websiteyi hızlandırın

Meson Network tarafından hızlandırılacak herhangi bir şey, URL'yi değiştirmek kadar basit olabilir. 

## Meson CDN'e Kaydolun

Meson CDN kontrol paneline kaydolun ve oturum açın.

[https://dashboard.meson.network/register](https://dashboard.meson.network/register)

![](./images/using-01.png)

## Pull zone oluştur

`Pull zones`'a tıkla ve `Pull Zone List`'e göz at.

![](./images/using-02.png)

`Create pull zone`' a tıkla ve hızlandırmak istediğiniz Web Sitesi Domain'ini girin.

![](./images/using-03.png)

Kaynak url sekmesiz belirtilmelidir. örneğin, https://www.domain.com/

## Örnek: Meson IPFS'yi geliştirir.

IPFS'e, sık sık çağırılan dosyaları Meson'a depolayan bir önbellek katmanı (diğer bir deyişle ikinci katman) ekledik. İçerik teslimi için hızı optimize etmek ve temel depolama katmanında (IPFS) maliyet/baskıdan tasarruf etmek faydalı olabilir.

Kaynak URL'yi tanımla (e.g. https://ipfs.io)

![](./images/using-04.png)

"`Add`" butonuna tıkla, "`Pull zone URL`"yi alın.

![](./images/using-05.png)

Orijinal sekmeyi yenisiyle değiştirin.

```bash
https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/
=>
https://pz-rlhgrj.meson.network/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/
```

Şimdi bu yeni url'yi isteyin. Meson'un dosyayı küresel olarak dağıtılmış terminallere dağıtması için biraz zamana ihtiyacı var.

```bash
https://spec00-bfhkcefkbefkfxx-06-rlhgrj.mesontracking.com/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/_m_access_key_caavymwyao
```

Bağlantı, isteği yerine getirmek için belirli bir node'a atlar,`spec00-bfhkcefkbefkfxx-06-rlhgrj` node'un kısaltılmış ve sabit değeridir.

![](./images/using-06.png)