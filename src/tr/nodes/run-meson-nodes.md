# Meson Node'u Çalıştırmak 101

[[toc]]

## Konuşlandırma gereksinimleri

- Genel IP (Statik/Dinamik) veya A DHCP ön koşulu
- Güvenlik duvarının portunun açılması (varsayılan: 443, özel sunucu portları için destek)
- Yeterli miktarda depolama sağlamak ( varsayılan minimum gereksinim: 20 GB)

## Kayıt

[https://dashboard.meson.network/register](https://dashboard.meson.network/register)

![](./images/run-meson-node-01.png)

"Nodes" butonuna tıklayın ve bu sayfada token ve kurulum eğitimini bulabilirsiniz

![](./images/run-meson-node-02.png)

## Meson Linux'a nasıl yüklenir?

### 1.İndirmek & Kurmak

```bash
wget 'https://staticassets.meson.network/public/meson_cdn/v3.1.x/meson_cdn-linux-amd64.tar.gz' && tar -zxf meson_cdn-linux-amd64.tar.gz && rm -f meson_cdn-linux-amd64.tar.gz && cd ./meson_cdn-linux-amd64 && sudo ./service install meson_cdn
```

::: tip
İpucu: Bu komutu kullanamayacağınızı bildiren "-bash: wget: command not found" gibi bildirimler alırsanız, lütfen önce komutu kullanarak wget'i yükleyin.
:::

**Ubuntu / Debian:** 

```bash
sudo apt-get update -y && sudo apt-get install wget -y
```

**CentOS / Fedora:**

```bash
sudo yum update -y && sudo yum install wget -y
```

konsolda çıkan:

```bash
$ wget 'https://staticassets.meson.network/public/meson_cdn/v3.1.x/meson_cdn-linux-amd64.tar.gz' && tar -zxf meson_cdn-linux-amd64.tar.gz && rm -f meson_cdn-linux-amd64.tar.gz && cd ./meson_cdn-linux-amd64 && sudo ./service install meson_cdn
--2022-06-18 07:48:10--  https://staticassets.meson.network/public/meson_cdn/v3.1.x/meson_cdn-linux-amd64.tar.gz
Resolving staticassets.meson.network (staticassets.meson.network)... 143.244.60.109
Connecting to staticassets.meson.network (staticassets.meson.network)|143.244.60.109|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 48735663 (46M) [application/x-gzip]
Saving to: 'meson_cdn-linux-amd64.tar.gz'

100%[======================================>] 48,735,663  81.2MB/s   in 0.6s   

2022-06-18 07:48:11 (81.2 MB/s) - 'meson_cdn-linux-amd64.tar.gz' saved [48735663/48735663]

2022-06-18 07:48:12 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 07:48:12 [INFO] service installed
```

### 2.Token ayarlama ve yapılandırma

```bash
sudo ./meson_cdn config set --token=your token --https_port=443 --cache.size=30
```

konsolda çıkan:

```bash
$ sudo ./meson_cdn config set --token=your token --https_port=443
2022-06-18 07:59:13 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
```

Sunucunuzda/ router'ınızda TCP 443 Portlarını her iki yönde de etkinleştirmenizi öneririz. 443 portlarının nasıl açılacağını %Router'ınızın & Bulut'unuzun talimatlarından kontrol edin.

Port numarasını ayarlama

```bash
sudo ufw allow 443              # default is 443, support for custom server ports
```

Port yönlendirimine başlamak için [https://portforward.com](https://portforward.com/?utm_source=mesonnetwork) adresine göz atın.

Varsayılan yapılandırmayı değiştirmek isterseniz, bu parametreleri kullanabilirsiniz.

Parametre listesi:

```bash
-token=your token              # you can find out your token in nodes page
-https_port=443                # default is 443, support for custom server ports
-cache.size=30                 # minimum: 20G, default: 30G
-cache.folder=xxxx             # string, cache folder path, could be an absolute path
```

Örnek:

Örnekte varsayılan portu 520, önbellek boyutunu 20GB olarak değiştirdim.

```bash
sudo ufw allow 520
sudo ./meson_cdn config set --token=your token --https_port=520 --cache.size=20 && sudo ./service restart meson_cdn
```

Yapılandırmayı değistirdikten sonra lütfen node'unuzu `sudo ./service restart meson_cdn` komutuyla yeniden başlatın.

### 3.Hizmeti Başlatmak

Meson Node hizmetini başlatın.

```bash
sudo ./service start meson_cdn
```

konsolda çıkan:

```bash
$ sudo ./service start meson_cdn
2022-06-18 07:59:57 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 07:59:57 [INFO] service started
```

2-3 dakika sonra yeni node'da açılan terminallerde yeni bir terminal kaydınız olur.

![](./images/run-meson-node-03.png)

### 4.Node Çalışma Durumunu Kontrol Etmek

```bash
sudo ./service status meson_cdn
```

konsolda çıkan:

```bash
$ sudo ./service status meson_cdn
2022-06-18 09:31:39 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 09:31:39 [INFO] service status: RUNNIN
```

### 5.Durdurmak & Kaldırmak

```bash
sudo ./service stop meson_cdn && sudo ./service remove meson_cdn
```

konsolda çıkan:

```bash
$ sudo ./service stop meson_cdn && sudo ./service remove meson_cdn
2022-06-18 10:18:01 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 10:18:01 [INFO] service stopped
2022-06-18 10:18:01 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 10:18:01 [INFO] service removed
```

### Komut Referansları

```bash
sudo ./service install meson_cdn              # установка узла
sudo ./service start meson_cdn                # запуск узла
sudo ./service status meson_cdn               # проверка состояния работы узла
sudo ./service stop meson_cdn                 # остановка узла
sudo ./service remove meson_cdn               # удаление узла
sudo ./service restart meson_cdn              # перезапуск узла
sudo ./meson_cdn log                          # проверка логов
./meson_cdn -h                                # проверка помощи
```