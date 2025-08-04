import React, { useContext } from "react";
import MessagesList from "../../Components/Message/MessageList";
import { ContactContext } from "../../Context/ContactContext";
import NewMessageForm from "../../Components/NewMessaForm/NewMessageForm";


const ChatScreen = () => {
    const { contact_info, deleteAllMessages } = useContext(ContactContext);

    if (!contact_info) {
        return (
            <div className="chat-loading">
                <div className="loading-spinner"></div>
                <span>Cargando chat...</span>
            </div>
        );
    }

    return (
        <div className="chat-screen">
            {/* Header del chat */}
            <div className="chat-header">
                <div className="chat-contact-info">
                    <img 
                        src={contact_info.avatar} 
                        alt={contact_info.name} 
                        className="chat-avatar"
                    />
                    <div className="chat-contact-details">
                        <h3 className="chat-contact-name">{contact_info.name}</h3>
                        <p className="chat-contact-status">
                            {contact_info.connection_status === 'online' 
                                ? 'En línea' 
                                : `Última vez: ${contact_info.last_connection}`
                            }
                        </p>
                    </div>
                </div>
                
                <div className="chat-actions">
                    {contact_info.messages.length > 0 && (
                        <button 
                            onClick={deleteAllMessages}
                            className="delete-all-btn"
                            title="Eliminar todos los mensajes"
                        >
                            🗑️
                        </button>
                    )}
                </div>
            </div>

            {/* Área de mensajes */}
            <div className="messages-area">
                <MessagesList />
            </div>

            {/* Formulario de nuevo mensaje */}
            <div className="message-input-area">
                <NewMessageForm />
            </div>
        </div>
    );
};

export default ChatScreen;