import { useAddress, useMetamask } from '@thirdweb-dev/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  const connectWithMetamask = useMetamask()
  const address = useAddress()

  const getMadaraPass = async () => {
    const request = await fetch('/api/getpass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    })
    const data = await request.json()
    if (request.ok) {
      alert('Access NFT granted successfully!')
    } else alert('Something went wrong. Please try again.')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>NFT Gated Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {address ? (
        <>
          <button
            onClick={getMadaraPass}
            className="rounded-md bg-orange-400 px-5 py-3 text-white"
          >
            Get Madara Pass
          </button>
          <div className="mt-10 text-blue-700">
            <Link href="/exclusive">Or proceed to exclusive dashboard</Link>
          </div>
        </>
      ) : (
        <button
          className="rounded-md bg-orange-400 px-5 py-3 text-white"
          onClick={connectWithMetamask}
        >
          Connect with Metamask
        </button>
      )}
    </div>
  )
}

export default Home
