import React, { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";

const NewMessageForm = () =>{
    const {addNewMessage} = useContext(ContactContext)

    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault() 
        let new_message_text = event.target.message.value 
        addNewMessage(new_message_text) 
        event.target.message.value = '' 
    } 
    return(
        <form onSubmit={handleSubmitSendMessageForm}>
                <div>
                    <label htmlFor="GET-text">Escribir un mensaje</label>
                    <input id= "GET-text" type="text" name="message" required/>
                </div>
                <button type="submit">Enviar</button>
            </form>
    )
}

export default NewMessageForm