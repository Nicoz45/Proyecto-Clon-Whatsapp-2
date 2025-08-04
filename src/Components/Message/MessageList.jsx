import React, { useContext } from "react";
import MessageCard from "./Message";
import { ContactContext } from "../../Context/ContactContext";

const MessagesList = () => {
    const {contact_info} = useContext(ContactContext)
    if(contact_info.messages.length === 0){
        return(<span>Aun no hay mensajes</span>)
    }
    const lista_mensajes = contact_info.messages.map((message) => {
        return (
            <MessageCard
                emisor={message.emisor}
                texto={message.texto}
                hora={message.hora}
                key={message.id}
                id={message.id}
                status={message.status}
            />
        )
    })
    return(
        <div>{lista_mensajes}</div>
    )
}

export default MessagesList