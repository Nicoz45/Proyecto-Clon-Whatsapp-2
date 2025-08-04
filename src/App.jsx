import React from "react"
import { Route, Routes } from "react-router"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import ChatContainerScreen from "./Screens/ChatContainerScreen/ChatContainer"
import './index.css'
import LoginScreen from "./Screens/LoginScreen/LoginScreen"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                {/* Ruta antigua para compatibilidad */}
                <Route path="/chats/:id/contacts" element={<ContactScreen/>}/>
                {/* Nueva ruta principal para el layout de WhatsApp */}
                <Route path="/chats" element={<ChatContainerScreen/>}/>
                {/* Ruta antigua para mensajes individuales */}
                <Route path="/contact/:contact_id/messages" element={<ContactScreen/>}/>
            </Routes>
        </div>
    )
}

export default App



/*
Quiero que hagas un componente que muestre un formulario para poner un numero de telefono, a parte un componente que
contenga una condicion de que si se coloca un numero de telefono me dirija a cierta pagina
*/
