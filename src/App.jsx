import React from "react"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"
import { Route, Routes } from "react-router"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import { ContactContext, ContactProvider } from "./Context/ContactContext"
import './index.css'
import LoginScreen from "./Screens/LoginScreen/LoginScreen"



const App = () => {
    return (
        <div >
            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                <Route path="/chats/:id/contacts" element={<ContactScreen/>}/>
                <Route path="/contact/:contact_id/messages" element={<ContactProvider><ChatScreen/></ContactProvider>}/>
            </Routes>
        </div>
    )
}

export default App



/*
Quiero que hagas un componente que muestre un formulario para poner un numero de telefono, a parte un componente que
contenga una condicion de que si se coloca un numero de telefono me dirija a cierta pagina
*/
