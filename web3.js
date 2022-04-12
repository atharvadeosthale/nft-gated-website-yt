import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NFT_WALLET_PRIVATE_KEY,
    ethers.getDefaultProvider('rinkeby')
  )
)

const editionModule = sdk.getEdition(process.env.NEXT_PUBLIC_EDITION_ADDRESS)

export { sdk, editionModule }
