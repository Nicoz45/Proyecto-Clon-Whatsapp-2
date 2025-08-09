import React, { useContext } from "react";
import MessagesList from "../../Components/Message/MessageList";
import { ContactContext } from "../../Context/ContactContext";
import NewMessageForm from "../../Components/NewMessaForm/NewMessageForm";
import "./chatScreen.css";
import ICONS from "../../constants/Icons";


const ChatScreen = () => {
    const { contact_info} = useContext(ContactContext);

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
                    <div className="img-container">
                        <img
                        src={contact_info.avatar}
                        alt={contact_info.name}
                        className="chat-avatar"
                    />
                    </div>
                    <div className="chat-contact-details">
                        <h4 className="chat-contact-name">{contact_info.name}</h4>
                        <span className="chat-contact-status">
                            {contact_info.connection_status === 'online'
                                ? 'En línea'
                                : `Última vez: ${contact_info.last_connection}`
                            }
                        </span>
                    </div>
                    <div className="buttons-details-header">
                        <div className="video-arrow-icons">
                            <button className="video-button">
                                <span><ICONS.Video className="icon-video" /></span>
                                <span><ICONS.ArrowDown className="icon-arrow" fontSize={20}/></span>
                            </button>
                        </div>
                        <button className="search-button-details-header"><ICONS.Search fontSize={22}/></button>
                        <button className="menu-button-details-header"><ICONS.Menu /></button>
                    </div>
                </div>
            </div>
                

            {/* Área de mensajes */}
            <div className="messages-area">
                <MessagesList />
                <img src="/images/fondoWhatsapp.png" alt="chat-background" className="chat-background" />
            </div>

            {/* Formulario de nuevo mensaje */}
            <div className="message-input-area">
                <NewMessageForm />
            </div>
        </div>
    );
};

export default ChatScreen;