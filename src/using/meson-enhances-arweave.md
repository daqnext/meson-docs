# Meson enhance Arweave

Upload a file to Arweave network and get dataTxId.

```bash
{“name”: “Top Gun Maverick 2021 New Trailer Paramount Pictures_1080p.mp4”, “size”: 27433229, “lastModifiedDate”: 1624960183753,
“dataTxId”: “-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k”, “dataContentType”: “video/mp4”}
```

![](https://cdn.jsdelivr.net/gh/daqnext/meson-docs/src/images/using/meson-enhance-arweave-01.png)

Open it in official gateway:

```bash
https://arweave.net/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k
```

Now, let’s use Meson Network to optimize the global delivery for this file. The format:

```bash
https://pz-ozoavz.meson.network/ + ‘arweave_file_id’
=>
https://pz-ozoavz.meson.network/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k
```

The link jumps to a specific node to serve the request, `spec00-bhikbcikfekcxxx-06-ozoavz` is the hash of node.

```bash
https://spec00-bhikbcikfekcxxx-06-ozoavz.mesontracking.com/-ZW0S2kqxYSRUHQW5AbBp046gLILFCZmxf37HoP1K4k_m_access_key_wbvsdzxdzf
```

![](https://cdn.jsdelivr.net/gh/daqnext/meson-docs/src/images/using/meson-enhance-arweave-04.png)

**The difference between the storage layer and cache layer**

The design philosophy of the storage layer and cache layer in blockchain world is quite different. The storage layer contains these principles at least:

- Data Integrity: Take a proactive stance to protect referential integrity and reduce instances of redundancy or potential for inconsistency.
- Consistency: The data consistency model specifies a contract between programmer and system, wherein the system guarantees that if the programmer follows the rules, storage will be consistent and the results of reading, writing, or updating storage will be predictable.
- Confidentiality: Clients that desire for their data to be stored privately.

As for the cache layer, focus more on the experience while delivering the data to users, e.g. choose and optimize a better router, the load for the transfer system, the life cycle of the files stored in nodes.