import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import './loginHeader.css'

const LoginHeader = () => {
    return (
        <header className="login-header">
            <div className="login-logo">
                <i><FaWhatsapp /></i>
                <span>WhatsApp</span>
            </div>
        </header>
    )
}

export default LoginHeader