# Meson улучшает IPFS/Filecoin

Мы добавили кэш-слой (он же второй слой) на IPFS, который хранит файлы высокочастотного поиска в Meson. Это может быть полезно для оптимизации скорости доставки контента и экономии затрат/напряжения на основном уровне хранения (IPFS).

Определите URL-адрес происхождения (например, https://ipfs.io).

![](./images/using-04.png)

Нажмите `Add`, Получить `Pull zone url`

![](./images/using-05.png)

Измените исходный путь на новый.

```bash
https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/
=>
https://pz-rlhgrj.meson.network/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/
```

Теперь запросите этот новый url. meson нужно некоторое время, чтобы развернуть файл на распределенных терминалах по всему миру.

```bash
https://spec00-bfhkcefkbefkfxx-06-rlhgrj.mesontracking.com/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/_m_access_key_caavymwyao
```

Ссылка переходит на определенный узел для обслуживания запроса, `spec00-bfhkcefkbefkfxx-06-rlhgrj` - хэш узла.

![](./images/using-06.png)