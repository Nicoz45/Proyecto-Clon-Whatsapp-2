import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './contactList.css'

const ContactList = ({ contacts, onContactSelect, selectedContactId }) => {
    return (
        <div className="contacts-list-container">
            {contacts.map((contact) => (
                <ContactItem 
                    key={contact.id} 
                    contact={contact}
                    onSelect={onContactSelect}
                    isSelected={selectedContactId === contact.id}
                />
            ))}
        </div>
    );
};

export default ContactList;