import React from "react";
import ICONS from "../../../constants/icons";
import IconHover from "../../IconHover/IconHover";
import "./loginSteps.css"
import StepsList from "./StepsList";
import { Link } from "react-router";
const LoginStepsAndQr = () => {
    const id = '123'
    return (
        <div className="general-container-steps-qr">
            <div className="qr-and-list-container">
                <div className="steps-list-container">
                    <h2>Pasos para iniciar sesion</h2>
                    <StepsList/>
                </div>
                <div className="qr-code">
                    <img src="images/qr-code.png" alt="Qr-Code-img" width={300} />
                </div>
            </div>
            <div className="sesion-and-number-container">
                <div className="check-sesion">
                    <input type="checkbox" defaultChecked className="checkbox"/>
                    <span className="checkbox-span">Mantener la sesion iniciada en este navegador.<span><IconHover className="icon-hover" name="Si seleccionas esta opcion, se mantendra la sesion iniciada
                        en WhatsApp Web despues de cerrar la pestaña del navegador"><ICONS.exclamation/></IconHover></span></span>
                </div>
                <Link to={`/chats/${id}/contacts`} className="link-number">
                <span className="text-number-link">Iniciar sesión con numero de telefono</span>
                <span><ICONS.ArrowRightOpen/></span></Link>
            </div>
        </div>
    )
}

export default LoginStepsAndQr

/*
        Quiero que crees una funcion haciendo uso de rutas y link de react router para cuando haga click en iniciar sesion con numero de telefono me lleve a la pagina de chats
*/