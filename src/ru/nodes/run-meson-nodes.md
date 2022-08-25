# Запуск Meson Node 101

[[toc]]

## Требования к развертыванию

- Публичный (статический/динамический) IP или резервирование DHCP
- Открытие порта брандмауэра (по умолчанию: 443, поддержка пользовательских портов сервера)
- Обеспечение достаточного объема памяти (минимальные требования по умолчанию: 20 Гб)

## Регистрация

Ссылка - [https://dashboard.meson.network/register](https://dashboard.meson.network/register)

![](./images/run-meson-node-01.png)

Нажмите кнопку "Узлы", и на этой странице вы сможете найти свой токен и руководство по установке

![](./images/run-meson-node-02.png)

## Как установить Meson в Linux?

### 1.Загрузка и установка

```bash
wget 'https://staticassets.meson.network/public/meson_cdn/v3.1.x/meson_cdn-linux-amd64.tar.gz' && tar -zxf meson_cdn-linux-amd64.tar.gz && rm -f meson_cdn-linux-amd64.tar.gz && cd ./meson_cdn-linux-amd64 && sudo ./service install meson_cdn
```

::: tip
Если вы получаете уведомления типа "-bash: wget: команда не найдена", говорящие о том, что вы не можете использовать эту команду, пожалуйста, сначала установите wget с помощью команды.
:::

**Ubuntu / Debian:** 

```bash
sudo apt-get update -y && sudo apt-get install wget -y
```

**CentOS / Fedora:**

```bash
sudo yum update -y && sudo yum install wget -y
```

вывод консоли:

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

### 2.Настройка токена и конфигурации

```bash
sudo ./meson_cdn config set --token=your token --https_port=443 --cache.size=30
```

вывод консоли:

```bash
$ sudo ./meson_cdn config set --token=your token --https_port=443
2022-06-18 07:59:13 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
```

Мы рекомендуем включить TCP порты 443 в обоих направлениях на вашем сервере/маршрутизаторе. Проверьте инструкции вашего маршрутизатора и облака о том, как открыть порты 443.

Настройка номера порта

```bash
sudo ufw allow 443              # default is 443, support for custom server ports
```

Чтобы начать работу с перенаправлением портов, ознакомьтесь со статьей [https://portforward.com](https://portforward.com/?utm_source=mesonnetwork) .

Если вы хотите изменить конфигурацию по умолчанию, вы можете использовать эти параметры.

Список параметров:

```bash
-token=your token              # you can find out your token in nodes page
-https_port=443                # default is 443, support for custom server ports
-cache.size=30                 # minimum: 20G, default: 30G
-cache.folder=xxxx             # string, cache folder path, could be an absolute path
```

Пример:

В примере я изменил порт по умолчанию на 520, размер кэша на 20G.

```bash
sudo ufw allow 520
sudo ./meson_cdn config set --token=your token --https_port=520 --cache.size=20 && sudo ./service restart meson_cdn
```

После изменения конфигурации, пожалуйста, перезапустите ваш узел командой  `sudo ./service restart meson_cdn` .

### 3.Запуск службы

Start the service of Meson Node.

```bash
sudo ./service start meson_cdn
```

вывод консоли:

```bash
$ sudo ./service start meson_cdn
2022-06-18 07:59:57 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 07:59:57 [INFO] service started
```

Через 2-3 минуты у вас появится запись о новом узле.

![](./images/run-meson-node-03.png)

### 4.Проверка состояния работы узла

```bash
sudo ./service status meson_cdn
```

вывод консоли:

```bash
$ sudo ./service status meson_cdn
2022-06-18 09:31:39 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 09:31:39 [INFO] service status: RUNNIN
```

### 5.Остановка и удаление

```bash
sudo ./service stop meson_cdn && sudo ./service remove meson_cdn
```

вывод консоли:

```bash
$ sudo ./service stop meson_cdn && sudo ./service remove meson_cdn
2022-06-18 10:18:01 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 10:18:01 [INFO] service stopped
2022-06-18 10:18:01 [INFO] using config: /home/ec2-user/meson_cdn-linux-amd64/configs/default.toml
2022-06-18 10:18:01 [INFO] service removed
```

### Справочник по командам

```bash
sudo ./service install meson_cdn              # install node
sudo ./service start meson_cdn                # start node
sudo ./service status meson_cdn               # check node running status
sudo ./service stop meson_cdn                 # stop node
sudo ./service remove meson_cdn               # remove node
sudo ./service restart meson_cdn              # restart node
sudo ./meson_cdn log                          # check logs
./meson_cdn -h                                # check help
```