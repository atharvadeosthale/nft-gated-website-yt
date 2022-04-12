// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { editionModule } from '../../web3'

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const transfer = await editionModule.transfer(req.body.address, '0', 1)
    console.log(transfer)
    res.json({ success: true })
  } else res.status(405)
}
