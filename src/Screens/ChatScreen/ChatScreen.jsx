import React, { useContext, useState } from "react";
import MessagesList from "../../Components/Message/MessageList";
import NewMessageForm from "../../Components/NewMessaForm/NewMessageForm";
import { useParams } from "react-router";
import { getContactById } from "../../Services/contactService";
import { ContactContext } from "../../Context/ContactContext";


const ChatScreen = () => {

    const { contact_info, deleteAllMessages} = useContext(ContactContext)

    return (
        <div>
            <h1>Mensajes</h1>
            {
                contact_info ? (
                    <div>
                        {contact_info.messages.length > 0 &&
                            <button onClick={deleteAllMessages}>Eliminar todos los mensajes</button>}
                        <MessagesList/>
                        <NewMessageForm/>
                    </div>
                )
                : (
                    <span>Cargando...</span>
                )
            }
        </div>
    )
}

export default ChatScreen