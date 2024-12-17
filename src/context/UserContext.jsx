import React, { createContext, useReducer } from 'react'

export const ACTIONS = {
    SET_USER: 'SET_USER'
}

export const UserContext = createContext()

export const userReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_USER:
            return {
                user: action.payload
            }
        default:
            return state
    }
}

export const UserContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    })

    return (
        <UserContext.Provider value={{ ...state, dispatch, ACTIONS }}>
            {children}
        </UserContext.Provider>
    )
}
