import React from "react"
import { Route, Routes } from "react-router"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import ChatContainerScreen from "./Screens/ChatContainerScreen/ChatContainer"
import './index.css'
import LoginScreen from "./Screens/LoginScreen/LoginScreen"
import { ContactProvider } from "./Context/ContactContext"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                <Route path="/chats/:id/contacts" element={<ContactScreen/>}/>
                <Route path="/chats" element={<ChatContainerScreen/>}/>
                <Route path="/contact/:contact_id/messages" element={<ContactProvider><ChatScreen/></ContactProvider>}/>
            </Routes>
        </div>
    )
}

export default App

