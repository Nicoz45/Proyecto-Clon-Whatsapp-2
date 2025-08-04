import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContactById } from "../Services/contactService";

export const ContactContext = createContext()

export const ContactProvider = ({ children }) => {
    
    const { contact_id } = useParams()

    
    const [contact_info, setContact] = useState(null)
    

    
    useEffect(() => {
        setTimeout(() => {
            
            const contact_selected = getContactById(contact_id)
            console.log(getContactById)
            
            setContact(contact_selected)
        },
            1500
        )
    },
        [contact_id] 
    )

    const deleteMessageById = (message_id) => {
        
        const new_message_list = []
        for (const message of contact_info.messages) {
            if (message.id !== message_id) {
                new_message_list.push(message)
            }
        }
        setContact({ ...contact_info, messages: new_message_list })
    }

    const addNewMessage = (text) => {
        const new_message = {
            emisor: 'Yo',
            hora: '17:30', 
            texto: text,
            status: 'no-visto',
            id: contact_info.messages.length + 1
        }

        const cloned_message_list = [...contact_info.messages] 
        
        cloned_message_list.push(new_message)
        setContact({ ...contact_info, messages: cloned_message_list })
    }

    const deleteAllMessages = () => setContact({ ...contact_info, messages: [] })

    return (
        <ContactContext.Provider value={
            {
                contact_info: contact_info,
                deleteAllMessages: deleteAllMessages,
                deleteMessageById: deleteMessageById,
                addNewMessage: addNewMessage
            }
        }>
            {children}
        </ContactContext.Provider>
    )
}