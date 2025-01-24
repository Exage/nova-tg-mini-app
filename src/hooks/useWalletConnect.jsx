import React from 'react'
import { TonConnect } from '@tonconnect/sdk'
import { useWallet } from '@/lib/walletStore'

export const useWalletConnect = () => {
    const { setWallet } = useWallet()
    const tonConnect = new TonConnect()

    const handleConnect = async () => {
        try {
            await tonConnect.connect()
            const walletInfo = tonConnect.wallet
            setWallet(walletInfo)
            console.log('Wallet connected: ', walletInfo)
        } catch (error) {
            console.error('Failure during wallet connect: ', error)
        }
    }

    return { handleConnect }
}
