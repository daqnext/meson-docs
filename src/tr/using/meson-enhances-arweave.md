# Meson Arweave'i geliştirir

Arweave ağına bir dosya yükleyin ve dataTxId alın.

```bash
{“name”: “Top Gun Maverick 2021 New Trailer Paramount Pictures_1080p.mp4”, “size”: 27433229, “lastModifiedDate”: 1624960183753,
“dataTxId”: “-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k”, “dataContentType”: “video/mp4”}
```

![](https://cdn.jsdelivr.net/gh/daqnext/meson-docs/src/images/using/meson-enhance-arweave-01.png)

Resmî köprüde açın:

```bash
https://arweave.net/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k
```

Şimdi, bu dosyanın küresel dağıtımını optimize etmek için Meson Network'ü kullanalım. Biçim:

```bash
https://pz-ozoavz.meson.network/ + ‘arweave_file_id’
=>
https://pz-ozoavz.meson.network/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k
```

Bağlantı, isteği yerine getirmek için belirli bir node'a atlar, `spec00-bhikbcikfekcxxx-06-ozoavz` node'un kısaltılmış ve sabit değeridir.

```bash
https://spec00-bhikbcikfekcxxx-06-ozoavz.mesontracking.com/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k_m_access_key_wbvsdzxdzf
```

![](https://cdn.jsdelivr.net/gh/daqnext/meson-docs/src/images/using/meson-enhance-arweave-04.png)

**Depolama katmanı ve önbellek katmanı arasındaki fark**

Blok zinciri dünyasında depolama katmanı ve önbellek katmanının tasarım felsefesi oldukça farklıdır. Depolama katmanı en azından şu ilkeleri içerir:

- Veri Bütünlüğü: Referans bütünlüğünü korumak ve fazlalık veya uyumsuzluk olasılığını azaltmak için değişime ayak uydurabilen bir duruş sergiler.
- Tutarlılık: Veri tutarlılığı modeli, programcı ile sistem arasındaki bir sözleşmeyi belirtir; burada sistem, programcı kurallara uyarsa, herhangi bir bakımdan, depolamanın tutarlı olacağını ve okuma, yazma veya depolamayı güncelleme sonuçlarının tahmin edilebilir olacağını garanti eder.
- Gizlilik: Verilerinin özel olarak saklanmasını isteyen müşteriler.

Önbellek katmanına gelince, verileri kullanıcılara sunarken deneyime daha fazla odaklanır, örneğin daha iyi bir router seçmek ve optimize etmek, transfer sistemi için yükleme, node'larda depolanan dosyaların kullanım süresi.