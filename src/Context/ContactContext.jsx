import React, { createContext, useEffect, useState } from "react";
import { getContactById } from "../Services/contactService";

export const ContactContext = createContext()

export const ContactProvider = ({ children, contactId }) => {
    const [contact_info, setContact] = useState(null)

    useEffect(() => {
        if (contactId) {
            setContact(null); // Limpiar estado anterior
            
            setTimeout(() => {
                const contact_selected = getContactById(contactId)
                setContact(contact_selected)
            }, 500) // Reducido el tiempo de carga
        }
    }, [contactId])

    const deleteMessageById = (message_id) => {
        if (!contact_info) return;
        
        const new_message_list = contact_info.messages.filter(
            message => message.id !== message_id
        );
        
        setContact({ ...contact_info, messages: new_message_list })
    }

    const addNewMessage = (text) => {
        console.log('addNewMessage', text)
        if (!contact_info) return;
        
        const new_message = {
            sender: 'Yo',
            hour: new Date().toLocaleTimeString('es-ES', { 
                hour: '2-digit', 
                minute: '2-digit' 
            }),
            text: text,
            status: 'no-visto',
            id: Date.now() // Usar timestamp para IDs únicos
        }

        const cloned_message_list = [...contact_info.messages, new_message]
        setContact({ ...contact_info, messages: cloned_message_list })
    }

    const deleteAllMessages = () => {
        if (!contact_info) return;
        setContact({ ...contact_info, messages: [] })
    }

    return (
        <ContactContext.Provider value={{
            contact_info: contact_info,
            deleteAllMessages: deleteAllMessages,
            deleteMessageById: deleteMessageById,
            addNewMessage: addNewMessage,
            isLoading: !contact_info
        }}>
            {children}
        </ContactContext.Provider>
    )
}