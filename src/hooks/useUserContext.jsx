import { createContext } from 'react'
import { UserContext } from '@/context/UserContext'

export const useUserContext = () => {
    const context = createContext(UserContext)

    if (!context) {
        throw new Error('useUserContext must must be used inside an ModalsContextProvider')
    }
    
    return context
}
