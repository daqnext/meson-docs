# Roadmap

<el-timeline style="margin-top: 35px;">
    <el-timeline-item timestamp="2020" placement="top" :hollow="false" type="success">
        <el-card>
            <h4>Deliver the Meson prototype</h4>
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2021" placement="top" :hollow="false" type="success">
        <el-card>
            <h4>Launch the Testnet-1.0</h4>
            <p>Integrate the IPFS & Arweave as the storage layer and release the testnet mining rules.</p>
            <p><a target="_blank" href="https://github.com/daqnext/meson-terminal">Meson Terminal</a></p>
        </el-card>
        <el-card>
            <h4>Launch the Testnet-2.5</h4>
            <p>Decouple the structure between storage and retrieval, develop the architecture to support all kinds of origin URL based on HTTP302.
            Support the m3u8 standard to power the video and livestreaming platform (e.g. hotcat.live).</p>
            <p>Deploy the testnet token mapping contract and add Meson Improvement Proposals(<a href="https://github.com/daqnext/MIP">MIPs</a>).
            Users can join the governance for the network.</p>
            <p>Target early adopters.</p>
            <img src="@source/images/roadmap/node-stats.png">
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2022" placement="top" :hollow="true" type="primary">
        <el-card>
            <h4>Release the token model documentation</h4>
        </el-card>
        <el-card>
            <h4>Ship the production version</h4>
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2022" placement="top" :hollow="true" type="primary">
        <el-card>
            <h4>Mainnet-1.0: ERC20-based network</h4>
            <p>Launch the first mainnet version of Meson Network on Ethereum. Users can start trading bandwidth resources on Meson upon our launch.</p>
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2022-2023" placement="top" :hollow="true" type="primary">
        <el-card>
            <h4>Mainnet-2.0: Support the whole EVM-compatible bridges</h4>
            <p>Support various EVM-compatible chains, lower the threshold for users to use the network, and begin to integrate distributed home nodes as a complement to the network.</p>
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2023-2024" placement="top" :hollow="true" type="primary">
        <el-card>
            <h4>Mainnet-3.0: Meson Blockchain</h4>
            <p>
            Launch the Meson blockchain with sustainable ecosystem.
            Onboard the Developer / Cloud Service Provider / Telecom / Data Center.
            Serve the Images / Short Video / Long Video / Livestreaming / Downloading / Game.
            </p>
        </el-card>
        <el-card>
            <h4>Battle for Web3: Infrastructure & Entry</h4>
        </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="..." placement="top" :hollow="true" type="info"></el-timeline-item>
    <el-timeline-item timestamp="..." placement="top" :hollow="true" type="success"></el-timeline-item>
    <el-timeline-item timestamp="..." placement="top" :hollow="true" type="primary"></el-timeline-item>
</el-timeline>