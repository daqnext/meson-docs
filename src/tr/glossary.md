# 🧱 Sözlük

### Bant Genişliği

Bant genişliği, aslında bir bağlantı üzerinden, ölçülen bir sürede -saniyede megabit olarak hesaplanır (mbps) - gönderilebilen bilgi hacmi olduğundan, genellikle internet hızıyla karıştırılır.

![](../images/glossary/bandwidth.png)

- [Bandwidth (computing) - Wikipedia](https://en.wikipedia.org/wiki/Bandwidth_(computing))
- [What Is Bandwidth? Definition, Meaning, and Details](https://www.lifewire.com/what-is-bandwidth-2625809)

### CDN (İçerik Dağıtım Ağı)

Bir içerik dağıtım ağı (CDN), coğrafi olarak dağıtılmış büyük proxy sunucuları ve veri merkezleri ağını ifade eder. CDN, içeriği son kullanıcılara ilişkin mekansal olarak dağıtarak yüksek kullanılabilirlik ve iyi performans sağlamaktır. Farklı sektörlerdeki şirketler, medya (video, ses ve akış gibi) ve HTTP içeriği sağlamak ve dosya indirmek için CDN kullanır.

### HTTP & HTTPS

Hypertext Transfer Protocol (HTTP), HTML gibi hiper ortam dosyalarını iletmek için bir uygulama katmanı protokolüdür. Web tarayıcıları ve web sunucuları arasındaki iletişim için tasarlanmıştır. HTTP, hiper metin belgelerine (örneğin hiper linkler) kullanıcıların kolayca erişilebildiği World Wide Web için veri iletişiminin temelidir. Hypertext Transfer Protocol Secure (HTTPS), HTTP'nin bir uzantısıdır. Bir bilgisayar ağı üzerinden güvenli iletişim için kullanılır ve internette yaygın olarak kullanılır. HTTPS'de iletişim protokolü, Transport Layer Security (TLS) kullanılarak şifrelenir.

Farklar:

- HTTPS güvenliyken HTTP güvenli değildir.
- HTTP, uygulama katmanında, HTTPS ise aktarım katmanında çalışır ve kimlik doğrulamasını sağlamak için TLS/SSL sertifikasını kullanır.

### Static IP adresleri

Statik bir IP adresi, basitçe, değişmeyen bir adrestir. Cihazınıza statik bir IP adresi atandığında, bu numara, cihaz kullanımdan kaldırılana veya ağ yapınız değişene kadar genellikle aynı kalır. Statik IP adresleri genellikle sunucular veya diğer önemli donanımlar tarafından kullanılır.

Statik IP adresleri, İnternet Servis Sağlayıcıları (ISP'ler) tarafından atanır. ISP'niz, hizmet sözleşmenizin niteliğine bağlı olarak size statik bir IP adresi tahsis edebilir veya etmeyebilir. Seçeneklerinizi biraz sonra açıklayacağız, ancak şimdilik statik bir IP adresinin ISP sözleşmenizin maliyetini artırdığını varsayıyoruz.

Statik bir IP adresi, IPv4 veya IPv6 olabilir; bu durumda önemli olan kalite sabittir. Bir gün, sahip olduğumuz ağa bağlı her bir donanımın benzersiz bir statik IPv6 adresi olabilir. Henüz o aşamada değiliz. Şimdilik, kalıcı adresler için genellikle statik IPv4 adresleri kullanıyoruz.

#### Statik IP'nin avantajları

Statik bir IP adresi kullanmanın sayısız avantajı vardır. Bu faydalar arasında:

- **Daha iyi DNS desteği**: Statik IP adreslerinin DNS sunucularıyla ayarlanması ve yönetilmesi çok daha kolaydır.
- **Sunucu Barındırma**: Bir web sunucusu, e-posta sunucusu veya başka bir tür sunucu barındırıyorsanız, statik bir IP adresine sahip olmak, müşterilerin sizi DNS aracılığıyla bulmasını kolaylaştırır. Pratik olarak konuşursak, bu, müşterilerin statik bir IP adrese sahip olan web sitelerinize ve hizmetlerinize daha hızlı ulaşması anlamına gelir.
- **Kullanışlı uzaktan erişim**: Statik bir IP adresi, Sanal Özel Ağ (VPN) veya diğer uzaktan erişim programları kullanarak uzaktan çalışmayı kolaylaştırır.
- **Daha güvenilir iletişim**: Statik IP adresleri, telekonferans veya diğer sesli ve görüntülü iletişimler için İnternet Üzerinden Ses Protokolü'nün (VoIP) kullanımını kolaylaştırır.
- **Daha güvenilir coğrafi konum hizmetleri**: Statik bir IP adresiyle hizmetler, IP adresini fiziksel konumuyla eşleştirebilir. Örneğin, statik bir IP adresine sahip yerel bir hava durumu hizmeti kullanıyorsanız, bir sonraki şehir için olan yerine ihtiyacınız olan hava raporunu alma olasılığınız daha yüksektir.

### Dynamic Host Configuration Protocol (DHCP) Reservation

Static Dynamic Host Configuration Protocol (DHCP) ya da DHCP Reservation, router'ın DHCP sunucusunun Yerel Alan Ağınızdaki (LAN) bir ana bilgisayara aynı IP adresini atamasını sağlar. Bu, bir IP adresini bir Media Access Control (MAC) adresiyle ilişkilendirerek yapılır. Ek yapılandırma gerektirmesine rağmen, statik DHCP kullanmak ağda sorun gidermeyi kolaylaştırır. Statik DHCP, bir LAN üzerindeki cihazların birbirine daha kolay bağlanmasına da yardımcı olur. Statik DHCP kullanmanın klasik bir örneği, ağ dışından erişilebilen bir web sunucusu kurmaktır.

- [Static IP vs DHCP Reservation](https://www.stephenwagner.com/2019/05/07/static-ip-vs-dhcp-reservation/)

### Katman 1 Ağı

İnternette üst düzey bir ağ. Dünya çapında 16 tane Katman 1 Ağı vardır. ABD'de AT&T, CenturyLink, GTT, Verizon ve Zayo Group, Katman 1'dir. Almanya, İngiltere, Fransa, Hong Kong, Japonya, Hindistan, İtalya, İspanya ve İsveç, ABD dışı ağlara ev sahipliği yapmaktadır.

Settlement-free peering, olarak bilinen Katman 1 ağlar diğer Katman 1 ağlarından gelen trafiğin omurgalarını ücretsiz olarak aktarmasına izin veren özel ağlardır. Eşleştirme ve IXP'ye bakın.

![](../images/glossary/internet_connectivity_distribution_core.svg)

#### Katman 2 ve Katman 3 Ağları

Katman 2 ağlar, bazı ağlarla ücretsiz olarak eşleşir, ancak İnternet'in büyük bir bölümüne ulaşmak için ödeme yapar. Katman 3 ağları, daha büyük omurgalara erişim elde etmek için her zaman ücret öder.

- [Tier 1 Network - Wikipedia](https://en.wikipedia.org/wiki/Tier_1_network)

### Merkeziyetsiz İçerik Dağıtım Ağı (DCDN)

Merkeziyetsiz İçerik Dağıtım Ağı, gelir dağıtımı ve medya tüketimi için adil ve şeffaf bir ekosistem oluşturarak orijinal içerik oluşturucuları ve toplulukları güçlendiren ve ayrıca internet performansını artırmak için geniş çapta dağılmış bir edge node ağı kullanan merkezi olmayan bir CDN'dir.

### Arweave

Arweave, tamamen merkeziyetsiz bir ağdır. Arweave ağındaki tüm bağlı siteler ve uygulamalar, permaweb olarak adlandırılan şeydir.

Permaweb, geleneksel web ile paraleldir, ancak içerik kalıcıdır ve güç dinamikleri kontrolü kullanıcıya verir. Bu, 404'lerle karşılaşmayacağınız ve permaweb'de bir sayfa bulduğunuzda, yıllar sonra hala orada olacağından emin olabileceğiniz anlamına gelir.

- [The Arweave Glossary: Key Terms For Arweave Beginners](https://arweave.news/arweave-glossary/)

### IPFS

The InterPlanetary File System (IPFS), verileri dağıtılmış bir dosya sisteminde depolamak ve paylaşmak için bir protokol ve uçtan uca ağdır. IPFS, tüm bilgi işlem cihazlarını birbirine bağlayan global namespace'teki her dosyayı benzersiz bir şekilde tanımlamak için içerik adreslemeyi kullanır.

### Filecoin

Filecoin, dosyaların zaman içinde güvenilir bir şekilde saklanmasını sağlamak için yerleşik ekonomik teşviklerle dosyaları depolayan uçtan uca bir ağdır.

Filecoin'de kullanıcılar, dosyalarını depolama sağlayıcılarında depolamak için ödeme yapar. Depolama sağlayıcıları, dosyaları depolamaktan ve dosyaları zaman içinde doğru şekilde sakladıklarını kanıtlamaktan sorumlu bilgisayarlardır. Dosyalarını saklamak veya diğer kullanıcıların dosyalarını depolamak için para almak isteyen herkes Filecoin'e katılabilir. Kullanılabilir depolama ve bu depolamanın fiyatı tek bir şirket tarafından kontrol edilmez. Herkesin katılımda bulunacağı dosyaları depolamak ve almak için açık pazarları kolaylaştırır.

#### IPFS and Filecoin

Filecoin ve IPFS, dağıtılmış web'de veri depolamak ve paylaşmak için tamamlayıcı protokollerdir. Her iki sistem de ücretsiz, açık kaynaklıdır ve veri temsil biçimleri (IPLD) ve ağ iletişim protokolleri (libp2p) dahil olmak üzere birçok yapı taşını paylaşır. IPFS ile etkileşim, Filecoin kullanılmasını gerektirmezken, tüm Filecoin node'ları, özünde bir bakıma IPFS node'larıdır ve (bazı manuel yapılandırmalarla) libp2p kullanarak diğer IPFS node'larına bağlanabilir ve IPLD biçimli verileri alabilir.

- [What is Filecoin - Filecoin Docs](https://docs.filecoin.io/about-filecoin/what-is-filecoin/)