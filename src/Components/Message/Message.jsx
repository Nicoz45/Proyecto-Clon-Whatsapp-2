import React, { useContext, useState } from "react";
import { ContactContext } from "../../Context/ContactContext";


const MessageCard = ({ sender, hour, id, text, status }) => {
    const { deleteMessageById } = useContext(ContactContext);
    const [message_selected, setMessageSelected] = useState(false);
    
    const handleChangeMessageSelected = (e) => { 
        e.preventDefault();
        setMessageSelected(!message_selected);
    }

    const handleDeleteMessage = () => {
        deleteMessageById(id);
        setMessageSelected(false);
    }

    const isOwnMessage = sender === 'Yo';

    return (
        <div 
            className={`message-container ${isOwnMessage ? 'own-message' : 'other-message'}`}
            onContextMenu={handleChangeMessageSelected}
        >
            <div className="message-bubble">
                <div className="message-content">
                    <p className="message-text">{text}</p>
                </div>
                <div className="message-info">
                    <span className="message-time">{hour}</span>
                    {isOwnMessage && (
                        <span className={`message-status ${status}`}>
                            {status === 'visto' ? '✓✓' : '✓'}
                        </span>
                    )}
                </div>
                
                {message_selected && (
                    <div className="message-actions">
                        <button 
                            onClick={handleDeleteMessage}
                            className="delete-message-btn"
                            title="Eliminar mensaje"
                        >
                            🗑️
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageCard


