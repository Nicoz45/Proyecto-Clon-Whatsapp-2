import React, { useContext, useState } from "react";
import { ContactContext } from "../../Context/ContactContext";
import ICONS from "../../constants/Icons";
import "./newMessageForm.css"


const NewMessageForm = () => {
    const { addNewMessage } = useContext(ContactContext);
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message === '') return
        addNewMessage(message)
        setMessage('')
    }

    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault();
        setMessage()
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter' && !event.shiftKey){
            event.preventDefault()
            sendMessage()
        }
    }

    return (
        <form onSubmit={handleSubmitSendMessageForm} className="message-form">
            <div className="message-input-container">
                <button type="button" className="plus-button white-icon" title="Adjuntar archivos">
                    <ICONS.PlusIcon className="plus-icon" />
                </button>
                <button type="button" className="emoji-btn white-icon" title="Emoji">
                    <ICONS.StickerIcon className="sticker-icon" />
                </button>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe un mensaje"
                    className="message-input"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="send-btn"
                    onClick={sendMessage}
                    disabled={message === ''}
                    title="Enviar mensaje"
                >
                    <ICONS.SendIcon className="send-icon" />
                </button>
            </div>
        </form>
    );
};

export default NewMessageForm