import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App.jsx'

import './index.scss'

import { ModalsContextProvider } from './context/ModalsContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ModalsContextProvider>
            <UserContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </UserContextProvider>
        </ModalsContextProvider>
    </React.StrictMode>
)
