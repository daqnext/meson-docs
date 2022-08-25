# Meson ускоряет Arweave

Загрузите файл в сеть Arweave и получите dataTxId.

```bash
{“name”: “Top Gun Maverick 2021 New Trailer Paramount Pictures_1080p.mp4”, “size”: 27433229, “lastModifiedDate”: 1624960183753,
“dataTxId”: “-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k”, “dataContentType”: “video/mp4”}
```

![](https://cdn.jsdelivr.net/gh/daqnext/meson-docs/src/images/using/meson-enhance-arweave-01.png)

Откройте его в официальном шлюзе:

```bash
https://arweave.net/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k
```

Теперь давайте воспользуемся Meson Network для оптимизации глобальной доставки этого файла. Формат:

```bash
https://pz-ozoavz.meson.network/ + ‘arweave_file_id’
=>
https://pz-ozoavz.meson.network/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k
```

Ссылка переходит на определенный узел для обслуживания запроса,  `spec00-bhikbcikfekcxxx-06-ozoavz` - хэш узла.

```bash
https://spec00-bhikbcikfekcxxx-06-ozoavz.mesontracking.com/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k_m_access_key_wbvsdzxdzf
```

![](https://cdn.jsdelivr.net/gh/daqnext/meson-docs/src/images/using/meson-enhance-arweave-04.png)

**Разница между уровнем хранения и уровнем кэша**

Философия проектирования слоя хранения и слоя кэша в мире блокчейна совершенно разная. Слой хранения содержит, по крайней мере, следующие принципы:

- Целостность данных: Примите проактивную позицию для защиты ссылочной целостности и уменьшения случаев избыточности или потенциальной несогласованности.
- Согласованность: Модель согласованности данных определяет контракт между программистом и системой, в котором система гарантирует, что если программист будет следовать правилам, то хранилище будет согласованным, а результаты чтения, записи или обновления хранилища будут предсказуемыми.
- Конфиденциальность: Клиенты, которые хотят, чтобы их данные хранились конфиденциально.

Что касается кэш-слоя, сосредоточьтесь больше на опыте доставки данных пользователям, например, выберите и оптимизируйте лучший маршрутизатор, нагрузку на систему передачи данных, жизненный цикл файлов, хранящихся на узлах.