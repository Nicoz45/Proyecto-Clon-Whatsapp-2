import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import ChatScreen from '../ChatScreen/ChatScreen';
import { getContactList } from '../../Services/contactService';
import { ContactProvider } from '../../Context/ContactContext';
import './chatContainer.css';
import ContactHeader from '../../Components/ContactsHeaderComponents/ContactHeaderForm';

const ChatContainerScreen = () => {
    const contacts = getContactList();
    const [selectedContactId, setSelectedContactId] = useState(null);
    
    const handleContactSelect = (contactId) => {
        setSelectedContactId(contactId);
    };

    return (
        <div className="chat-container">
            {/* Sidebar con contactos */}
            <div className="contacts-sidebar">
                <div className="contacts-header">
                    <ContactHeader/>
                </div>
                <ContactList 
                    contacts={contacts} 
                    onContactSelect={handleContactSelect}
                    selectedContactId={selectedContactId}
                />
            </div>
            
            {/* Área del chat */}
            <div className="chat-area">
                {selectedContactId ? (
                    <ContactProvider contactId={selectedContactId}>
                        <ChatScreen />
                    </ContactProvider>
                ) : (
                    <div className="no-chat-selected">
                        <div className="welcome-message">
                            <h2>WhatsApp Web</h2>
                            <p>Selecciona un chat para comenzar a conversar</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatContainerScreen;