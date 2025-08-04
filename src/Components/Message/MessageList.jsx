import React, { useContext, useEffect, useRef } from "react";
import MessageCard from "./Message";
import { ContactContext } from "../../Context/ContactContext";

const MessagesList = () => {
    const { contact_info } = useContext(ContactContext);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [contact_info?.messages]);

    if (!contact_info || contact_info.messages.length === 0) {
        return (
            <div className="no-messages">
                <div className="no-messages-content">
                    <p>🗨️</p>
                    <span>No hay mensajes aún</span>
                    <small>Escribe tu primer mensaje abajo</small>
                </div>
            </div>
        );
    }

    return (
        <div className="messages-list">
            {contact_info.messages.map((message) => (
                <MessageCard
                    key={message.id}
                    emisor={message.sender}
                    texto={message.text}
                    hora={message.hour}
                    id={message.id}
                    status={message.status}
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessagesList;