# Mining & Rewards

Who are the most suitable miners for Meson Network?

- Constant bandwidth users
- Static IP for home users
- IoT devices' owners
- Dedicated servers' owners
- IDC servers' (corporation/organization/schools) owners.

They are welcome to become our most stable terminal suppliers. As a result, by making the most use of these idle resources, it becomes an economical and healthy model according to the blueprint and positioning of Meson Network Project.

## Prerequisite

- A Static(Public) IP or A DHCP Reservation
- Opening the port of the firewall (default: 443, support for custom server ports)
- Providing enough Storage (default minimum requirements: 20G)

## Mining Rules

Please check [mining rules](https://dashboard.meson.network/ming_rules_msntt) for details.

Mining Score = Bandwidth Score * Storage Score * Credit Score

Basically, Bandwidth is the most important related fact for BandwidthScore.

And, Storage Space is necessary to cache the files for StorageScore.

In addition, standing and stable servers will have a higher Credit Score.

Also, there will be some reward adjustments for servers in different regions.
<div style="text-align:center">
<table>
    <tr>
        <td>Item</td>
        <td>Value</td>
    </tr>
    <tr>
        <td>Network</td>
        <td>TestNet</td>
    </tr>
    <tr>
        <td>Mining Score</td>
        <td>Mining Score = Bandwidth Score * Storage Score * Credit Score</td>
    </tr>
    <tr>
        <td>Percentage of earning of some mining node</td>
        <td><img src="./images/percentage.svg" /></td>
    </tr>
    <tr>
        <td>Bandwidth Score</td>
        <td><img src="./images/bandwidth-score.svg" /></td>
    </tr>
    <tr>
        <td>Bandwidth Upper Bound</td>
        <td>Bandwidth score won't increase after bandwidth reaching 1500 Mb/s</td>
    </tr>
    <tr>
        <td>Storage Score</td>
        <td><img src="./images/storage-score.svg" /></td>
    </tr>
    <tr>
        <td>Minium Storage Requirement</td>
        <td>20GB</td>
    </tr>
    <tr>
        <td>Credit Score</td>
        <td><img src="./images/credit-score.svg" /><br>If your node is online and stable, the credit will increase gradually until The maximum value is 10,000,000
When your node goes offline the credit will decrease gradually until 0.
Makes your node stable to get more tokens.</td>
    </tr>
    <tr>
        <td>Example</td>
        <td align="left">If your bandwidth is 200Mb/s, "Bandwidth score" will be 200<br>If you set storage to 60GB, "Storage score" will be 0.85<br>If your credit is 500000, "Credit score" will be 0.7<br>Mining score = 200 * 0.85 * 0.7 = 119</td>
    </tr>
</table>
</div>

All the Testnet Tokens will be mapped to 1% of the Mainnet Tokens. according to FAQ-Token, there will be 100,000,000 initial Meson Tokens, of which there will be 1,000,000 Tokens are used as the exchange of Testnet Tokens.