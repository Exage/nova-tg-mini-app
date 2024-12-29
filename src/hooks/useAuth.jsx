import { useState } from 'react'
import { useUserContext } from './useUserContext'

export const useAuth = () => {

    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const { ACTIONS } = useUserContext()

    const auth = async (data) => {

        setLoading(true)
        setError(null)

        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const json = await response.json()

            if (!response.ok) {
                setError(json.message)
            }

            if (response.ok) {
                dispatch({ type: ACTIONS.SET_USER, payload: json.data })

                return json
            }

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }


    return { loading, error, auth }
}