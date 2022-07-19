# Accelerate Full Website

Anything to accelerate by Meson Network can be as simple as changing the URL.

## Register Meson CDN

Register and Login to Meson CDN dashboard

[https://dashboard.meson.network/register](https://dashboard.meson.network/register)

![](./images/using-01.png)

## Create Pull Zone

Click `Pull zones`, check out the `Pull Zone List`.

![](./images/using-02.png)

Click `Create pull zone`, and Enter the Website Domain you want to accelerate.

![](./images/using-03.png)

“Origin Url” should be specified without path. for example, [https://www.domain.com](https://www.domain.com/)

## Example: Meson enhances IPFS

We added a cache layer (AKA. second layer) on IPFS, which stores the high-frequency retrieval files to Meson. It might be helpful to optimize the speed for content delivery and to save the cost/pressure in the basic storage layer (IPFS).

Define the **Origin URL**(e.g. https://ipfs.io)

![](./images/using-04.png)

Click `Add`, Get `Pull zone url`

![](./images/using-05.png)

Change the original path into the new one.

```bash
https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/
=>
https://pz-rlhgrj.meson.network/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/
```

Now request this new url. meson needs some time to deploy the file on distributed terminals globally.

```bash
https://spec00-bfhkcefkbefkfxx-06-rlhgrj.mesontracking.com/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/_m_access_key_caavymwyao
```

The link jumps to a specific node to serve the request, `spec00-bfhkcefkbefkfxx-06-rlhgrj` is the hash of node.

![](./images/using-06.png)