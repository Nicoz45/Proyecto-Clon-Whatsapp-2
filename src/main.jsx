import React from 'react'
import { BrowserRouter } from "react-router"
import { createRoot } from 'react-dom/client'
import App from './App'
import { IconContextProvider } from './Context/IconContext/IconContext'
import { ToggleMenuProvider } from './Context/ToggleMenuContext/ToggleMenu'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ToggleMenuProvider>
            <IconContextProvider>
                <App />
            </IconContextProvider>
        </ToggleMenuProvider>
    </BrowserRouter>
)
