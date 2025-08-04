import React from 'react'
import { BrowserRouter } from "react-router"
import { createRoot } from 'react-dom/client'
import App from './App'
import { ContactProvider } from './Context/ContactContext'
import { IconContextProvider } from './Context/IconContext/IconContext'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <IconContextProvider>
            <App />
        </IconContextProvider>
    </BrowserRouter>
)
