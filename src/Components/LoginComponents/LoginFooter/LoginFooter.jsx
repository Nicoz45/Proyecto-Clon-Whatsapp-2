import React from "react"
import "./loginFooter.css"
import { Link } from "react-router"
import ICONS from "../../../constants/Icons"


const LoginFooter = () => {
    return (
        <div className="login-footer">
            <div className="login-footer-container">
                <div className="text-and-first-steps-container">
                    <span className="text-no-account">¿No tienes una cuenta de WhatsApp?</span>
                    <Link to="#" className="link-firs-steps"><span className="text-first-steps"> Primeros pasos</span>
                        <span><ICONS.ArrowUpRight /></span>
                    </Link>
                </div>
                <span className="text-security">
                    <span><ICONS.lock /></span>
                    Tus mensajes personales estan cifrados de extremo a extremo.
                </span>
            </div>
        </div>
    )
}

export default LoginFooter