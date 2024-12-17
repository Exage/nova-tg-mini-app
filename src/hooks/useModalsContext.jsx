import { useContext } from 'react'
import { ModalsContext } from '@/context/ModalsContext'

export const useModalsContext = () => {
    const context = useContext(ModalsContext)

    if (!context) {
        throw new Error('useModalsContext must must be used inside an UserContextProvider')
    }

    return context
}
