import { useAddress, useMetamask } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'

const Exclusive = () => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const connectWithMetamask = useMetamask()
  const address = useAddress()

  const checkAuth = async () => {
    const request = await fetch(`/api/auth?address=${address}`)
    const data = await request.json()
    if (request.ok) {
      setAuthenticated(true)
    } else setAuthenticated(false)
    setLoading(false)
  }

  useEffect(() => {
    checkAuth()
  }, [address])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {address ? (
        <>
          {loading ? (
            <div>Loading...</div>
          ) : authenticated ? (
            <div>Welcome to Madara's exclusive area!</div>
          ) : (
            <div>You don't have the NFT</div>
          )}
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
export default Exclusive
