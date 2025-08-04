import React, { useContext, useState } from "react";
import { ContactContext } from "../../Context/ContactContext";



const MessageCard = ({emisor, hora, id, texto, status}) => {
    const {deleteMessageById} =useContext(ContactContext)
    const [message_selected, setMessageSelected] = useState(false)
    
    const handleChangeMessageSelected = (e) => { 
    e.preventDefault()
        setMessageSelected(true)
    }
    return(
        <div onContextMenu={handleChangeMessageSelected}>
            <h2>{emisor}</h2>
            <h3>{texto}</h3>
            <span>{hora}</span>
            {
                message_selected && <button onClick={() => {deleteMessageById(id)}}>Eliminar</button>
            }
        </div>
    )
}

export default MessageCard


