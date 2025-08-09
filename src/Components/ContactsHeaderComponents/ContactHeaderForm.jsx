import React, { useState } from "react";
import ICONS from "../../constants/Icons";
import "./contactHeaderForm.css"

const ContactHeader = () => {
    const [is_active, setIsActive] = useState([false, false, false])
    const handleClick = (index) => {
        const new_active = [...is_active]
        new_active[index] = !new_active[index]
        setIsActive(new_active)
    }
    const buttonStyle = (index) => ({
        backgroundColor: is_active[index] ? "hsl(161, 54%, 14%)" : "transparent",
    })

    return (
        <div className="contact-header-container">
            <div className="title-and-buttons-header">
                <h2>WhatsApp</h2>
                <div className="chat-and-menu-buttons">
                    <button><ICONS.MessageSquare className="new-chat-icon-button" /></button>
                    <button><ICONS.Menu className="menu-icon-button" /></button>
                </div>
            </div>
            <div className="form-container">
                <form type="search" name="search" className="search-form" id="search">
                    <ICONS.Search className="search-icon" />
                    <input type="search" className="search-input" placeholder="Buscar un chat o iniciar uno nuevo"/>
                </form>
            </div>
            <div className="contact-type-buttons">
                <button style={buttonStyle(0)} onClick={() => handleClick(0)}>Todos</button>
                <button style={buttonStyle(1)} onClick={() => handleClick(1)}>No Leídos</button>
                <button style={buttonStyle(2)} onClick={() => handleClick(2)}>Grupos</button>
            </div>
        </div>

    )
}

export default ContactHeader