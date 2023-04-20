# mCloud On-Demand Pricing

  <el-table :data="tableData" :default-sort="{ prop: 'rate', order: 'descending' }" style="width: 100%">
    <el-table-column prop="instance" label="Instance" sortable width="122" />
    <el-table-column prop="cloud" label="Cloud" sortable width="122" />
    <el-table-column prop="image" label="Image" sortable width="122" />
    <el-table-column prop="rate" label="Monthly Rate" sortable width="160" />
    <el-table-column prop="region" label="Region" sortable :formatter="formatter" width="122" />
  </el-table>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

interface User {
  rate: string
  instance: string
  naimageme: string
  cloud: string
  region: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.region
}

const tableData: User[] = [
  {
    image: 'IPFS',
    cloud: 'AWS',
    instance: 'Falcon 1',
    rate: '$1.88/mo',
    region: 'US West',
  },
  {
    image: 'Arweave',
    cloud: 'AWS',
    instance: 'Falcon 1',
    rate: '$11.88/mo',
    region: 'US West',
  },
  {
    image: 'IPFS',
    cloud: 'AWS',
    instance: 'Falcon 9',
    rate: '$18.88/mo',
    region: 'US West',
  },
  {
    image: 'Arweave',
    cloud: 'AWS',
    instance: 'Falcon 9',
    rate: '$18.88/mo',
    region: 'US West',
  },
  {
    image: 'IPFS',
    cloud: 'AWS',
    instance: 'Falcon Heavy',
    rate: '$88.88/mo',
    region: 'US West',
  },
  {
    image: 'Arweave',
    cloud: 'AWS',
    instance: 'Falcon Heavy',
    rate: '$73.69/mo',
    region: 'US West',
  },
  {
    image: 'IPFS',
    cloud: 'AliCloud',
    instance: 'Falcon 1',
    rate: '$73.69/mo',
    region: 'Asia Pacific',
  },
  {
    image: 'Arweave',
    cloud: 'AliCloud',
    instance: 'Falcon 1',
    rate: '$73.69/mo',
    region: 'Asia Pacific',
  },
  {
    image: 'IPFS',
    cloud: 'AliCloud',
    instance: 'Falcon 9',
    rate: '$73.69/mo',
    region: 'Asia Pacific',
  },
  {
    image: 'Arweave',
    cloud: 'AliCloud',
    instance: 'Falcon 9',
    rate: '$73.69/mo',
    region: 'Asia Pacific',
  },
  {
    image: 'IPFS',
    cloud: 'AliCloud',
    instance: 'Falcon Heavy',
    rate: '$73.69/mo',
    region: 'Asia Pacific',
  },
  {
    image: 'Arweave',
    cloud: 'AliCloud',
    instance: 'Falcon Heavy',
    rate: '$73.69/mo',
    region: 'Asia Pacific',
  },
  {
    image: 'IPFS',
    cloud: 'Linode',
    instance: 'Falcon 1',
    rate: '$73.69/mo',
    region: 'US East',
  },
  {
    image: 'Arweave',
    cloud: 'Linode',
    instance: 'Falcon 1',
    rate: '$73.69/mo',
    region: 'US East',
  },
  {
    image: 'IPFS',
    cloud: 'Linode',
    instance: 'Falcon 9',
    rate: '$73.69/mo',
    region: 'US East',
  },
  {
    image: 'Arweave',
    cloud: 'Linode',
    instance: 'Falcon 9',
    rate: '$73.69/mo',
    region: 'US East',
  },
  {
    image: 'IPFS',
    cloud: 'Linode',
    instance: 'Falcon Heavy',
    rate: '$73.69/mo',
    region: 'US East',
  },
  {
    image: 'Arweave',
    cloud: 'Linode',
    instance: 'Falcon Heavy',
    rate: '$73.69/mo',
    region: 'US East',
  },
  {
    image: 'IPFS',
    cloud: 'Vultr',
    instance: 'Falcon 1',
    rate: '$73.69/mo',
    region: 'Europe',
  },
  {
    image: 'Arweave',
    cloud: 'Vultr',
    instance: 'Falcon 1',
    rate: '$73.69/mo',
    region: 'Europe',
  },
  {
    image: 'IPFS',
    cloud: 'Vultr',
    instance: 'Falcon 9',
    rate: '$73.69/mo',
    region: 'Europe',
  },
  {
    image: 'Arweave',
    cloud: 'Vultr',
    instance: 'Falcon 9',
    rate: '$73.69/mo',
    region: 'Europe',
  },
  {
    image: 'IPFS',
    cloud: 'Vultr',
    instance: 'Falcon Heavy',
    rate: '$73.69/mo',
    region: 'Europe',
  },
  {
    image: 'Arweave',
    cloud: 'Vultr',
    instance: 'Falcon Heavy',
    rate: '$73.69/mo',
    region: 'Europe',
  },
]
</script>