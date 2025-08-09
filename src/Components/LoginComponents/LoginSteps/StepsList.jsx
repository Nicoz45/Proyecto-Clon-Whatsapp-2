// src/Components/LoginComponents/LoginSteps/LoginSteps.js
import React from 'react';
import './stepsList.css'
import ICONS from '../../../constants/Icons';

const steps = [
    {
        icon: <ICONS.CircleOne/>,
        text: (<span className='whatsapp-text'>Abre WhatsApp <ICONS.Whatsapp className='icon_whatsapp'/> en tu teléfono</span>),
    },
    {
        icon: <ICONS.CircleTwo/>,
        text: (<span className='whatsapp-text'>En Android, toca Menú <ICONS.Menu className='icon_menu border-style'/>.En iPhone, toca Ajustes <ICONS.Settings className='icon_settings border-style'/>.</span>),
    },
    {
        icon: <ICONS.CircleThree/>,
        text: (<span className='whatsapp-text'>Toca Dispositivos vinculados, y luego, Vincular dispositivo.</span>),
    },
    {
        icon: <ICONS.CircleFour/>,
        text: (<span className='whatsapp-text'>Escanea el código QR para confirmar</span>),
    },
]

const StepsList = () => {
    return (
        <ol className="steps-list">
            {steps.map((step, index) => (
                <li key={index}>
                    <span className='step-icon'>{step.icon}</span>
                    {step.text}
                </li>
            ))}
        </ol>
    )
}

export default StepsList