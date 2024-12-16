import React, { createContext, useReducer } from 'react'

export const ACTIONS = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SET_MODAL_DATA: 'SET_MODAL_DATA'
}

export const ModalsContext = createContext()

export const modalsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.OPEN_MODAL:
            
            document.body.classList.add('modal-opened')
            
            return {
                ...state,
                modals: { ...state.modals, [action.payload]: true }
            }
        case ACTIONS.CLOSE_MODAL:

            document.body.classList.remove('modal-opened')

            return {
                ...state,
                modals: { ...state.modals, [action.payload]: false },
            }
        case ACTIONS.SET_MODAL_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export const ModalsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(modalsReducer, {
        modals: {},
        data: {}
    })

    return (
        <ModalsContext.Provider value={{ ...state, dispatch, ACTIONS }}>
            {children}
        </ModalsContext.Provider>
    )
}
