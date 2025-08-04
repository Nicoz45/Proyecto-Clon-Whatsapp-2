import React from 'react';
import { Link } from 'react-router';

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`}> 
            <img src={contact.avatar} alt={contact.name} width={100}/>
            <h2>{contact.name}</h2>
            <span>Última conexión: {contact.last_connection}</span>
            <span>Estado de conexión: {contact.connection_status}</span>
        </Link>
    )
}

export default ContactItem