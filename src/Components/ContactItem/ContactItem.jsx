import React from 'react';
import './contactItem.css'
const ContactItem = ({ contact, onSelect, isSelected }) => {
    const handleClick = () => {
        onSelect(contact.id);
    };

    const last_message = contact.messages && contact.messages.length > 0
        ? contact.messages[contact.messages.length - 1]
        : null;

    return (
        <div className={`contact-item ${isSelected ? 'selected' : ''}`}onClick={handleClick}>
            <div className="contact-avatar">
                <img src={contact.avatar} alt={contact.name}/>
            </div>
            <div className="contact-info">
                <div className="contact-header">
                    <h3 className="contact-name">{contact.name}</h3>
                    <div className="contact-time">
                        <span>{last_message ? last_message.hour : contact.last_connection}</span>
                    </div>
                </div>
                <div className="contact-preview">
                    <p className="last-message">
                        {last_message
                            ? `${last_message.sender === 'Yo' ? 'Tú: ' : ''}${last_message.text}`
                            : contact.description
                        }
                    </p>
                    <div className="contact-status">
                        {contact.connection_status === 'online' && (
                            <span className="online-indicator"></span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactItem;