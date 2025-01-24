import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

import App from './App.jsx'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TonConnectUIProvider manifestUrl='https://nova-tg-mini-app-git-tonconnect-exages-projects.vercel.app/tonconnect-manifest.json'>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </TonConnectUIProvider>
    </React.StrictMode>
)
