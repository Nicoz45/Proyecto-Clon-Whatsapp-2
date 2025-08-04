import React from "react";
import ICONS from "../../constants/Icons";

const ContactHeader = () => {
    ;
    return (
        <div>
            <div className="title-and-buttons-header">
                <h2>WhatsApp</h2>
                <button className="new-chat-button"><ICONS.MessageSquare/></button>
                <button className="menu-button"><ICONS.Menu/></button>
            </div>
            <form type="search" name="search" className="search-form" id="search">
                <input type="search" className="search-input" placeholder="Buscar un chat o iniciar uno nuevo" />
            </form>
            <div>
                <button>Todos</button>
                <button>No Leídos</button>
                <button>Grupos</button>
            </div>
        </div>

    )
}

export default ContactHeader