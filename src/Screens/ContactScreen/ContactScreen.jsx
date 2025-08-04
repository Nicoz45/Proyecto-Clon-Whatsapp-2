import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../Services/contactService';


const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContacts] = useState(contacts);

    return (
        <div className="contact-screen">
            <ContactList contacts={contactsState}/>
        </div>
    )
}

export default ContactScreen