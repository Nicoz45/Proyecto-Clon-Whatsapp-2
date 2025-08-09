import React, { useContext } from "react";
import ICONS from "../constants/Icons";
import "./contactSideBar.css"
import { MenuContext } from "../Context/ToggleMenuContext/ToggleMenu";


const ContactSideBar = () => {
    const {toggleMenu, is_menu_open, closeMenu, openMenu} = useContext(MenuContext);
    return(
        <div className="sidebar-container">
            <div className="chats-and-states-tab">
                <button title="Chats" onClick={toggleMenu} onAuxClick={openMenu}>{is_menu_open ? <ICONS.MessageSquareText className="icon-button"/> : <ICONS.MessageSquareText className="icon-button"/>}</button>
                <button title="Estados"><ICONS.TargetIcon className="icon-target-button" fontSize={23} color="#a5a5a5"/></button>
                <button title="Canales"><ICONS.ChatBubble className="icon-button"/></button>
                <button title="Comunidades"><ICONS.UserGroupIcon className="icon-button"/></button>
            </div>
            <div className="settings-and-profile-tab">
                <button title="Ajustes"><ICONS.GearSettings className="icon-button"/></button>
                <button title="Perfil"><ICONS.UserCircle className="icon-user-button" fontSize={35} color="#a5a5a5"/></button>
            </div>
        </div>
    )
}

export default ContactSideBar