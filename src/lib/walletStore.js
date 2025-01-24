import { create } from 'zustand'

export const useWallet = create((set) => ({
    wallet: null,
    setWallet: (wallet) => {
        set(() => ({ wallet }))
    },
}))
