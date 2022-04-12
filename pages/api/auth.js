import { editionModule } from '../../web3'

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const balance = await editionModule.balanceOf(req.query.address, '0')
    if (balance.isZero()) res.status(401).json({ message: 'No NFT found' })
    else res.json({ message: 'Access granted' })
  } else res.status(405)
}
