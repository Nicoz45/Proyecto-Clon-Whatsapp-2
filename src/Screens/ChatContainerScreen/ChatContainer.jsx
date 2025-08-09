import React, {useContext, useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import ChatScreen from '../ChatScreen/ChatScreen';
import { getContactList } from '../../Services/contactService';
import { ContactProvider } from '../../Context/ContactContext';
import './chatContainer.css';
import ContactHeader from '../../Components/ContactsHeaderComponents/ContactHeaderForm';
import ContactSideBar from '../../ContactSideBar/ContactSideBar';
import ICONS from '../../constants/Icons';
import { MenuContext } from '../../Context/ToggleMenuContext/ToggleMenu';

const ChatContainerScreen = () => {
    const contacts = getContactList();
    const [selectedContactId, setSelectedContactId] = useState(null);
    const {is_menu_open} = useContext(MenuContext)
    /* if(!is_menu_open) return null; */

    const handleContactSelect = (contactId) => {
        setSelectedContactId(contactId);
    };

    return (
        <div className='chat-container-general'>
            <div className="chat-container">
                <div className='side-bar'>
                    <ContactSideBar />
                </div>
                {is_menu_open && (<div className="contacts-section">
                    <div className="contacts-header">
                        <ContactHeader />
                    </div>
                    <ContactList
                        contacts={contacts}
                        onContactSelect={handleContactSelect}
                        selectedContactId={selectedContactId}
                    />
                </div>
            )}
                {/* Área del chat */}
                <div className="chat-area">
                    {selectedContactId ? (
                        <ContactProvider contactId={selectedContactId}>
                            <ChatScreen />
                        </ContactProvider>
                    ) : (
                        <div className="no-chat-selected">
                            <div className="welcome-message">
                                <i><ICONS.WhatsAppIcon fontSize={80} /></i>
                                <h2>WhatsApp Web</h2>
                                <p>Selecciona un chat para comenzar a conversar</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatContainerScreen;