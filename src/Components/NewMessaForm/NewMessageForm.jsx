import React, { useContext, useState } from "react";
import { ContactContext } from "../../Context/ContactContext";


const NewMessageForm = () => {
    const { addNewMessage } = useContext(ContactContext);
    const [message, setMessage] = useState('');

    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault();
        console.log('enviando mensaje')
        if (message.trim() === '') return(
            addNewMessage(message.trim())
        )
        console.log('mensaje enviado', message)
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmitSendMessageForm} className="message-form">
            <div className="message-input-container">
                <button type="button" className="emoji-btn" title="Emoji">
                    😊
                </button>
                
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe un mensaje"
                    className="message-input"
                    autoComplete="off"
                />
                
                <button 
                    type="submit" 
                    className="send-btn"
                    disabled={message.trim() === ''}
                    title="Enviar mensaje"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.101 21.757L23.8 12.028L1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default NewMessageForm