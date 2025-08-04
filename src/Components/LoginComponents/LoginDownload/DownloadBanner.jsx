import React from 'react'
import { RiDownloadLine } from "react-icons/ri";
import './downloadBanner.css'
const DownloadBanner = () => {
    return (
        <div className="download-banner-container">
            <div>
                <img src="images/desktopwhatsapp.png" alt="desktop-download" width={70} />
            </div>
            <div className='download-banner-text'>
                <p className='download-banner-title'>Descarga WhatsApp para Windows</p>
                <p>Descarga la aplicación para Windows y haz llamadas, comparte 
                    pantalla y disfruta de una experiencia mas rapida.</p>
            </div>
            <button className='download-button'>Descargar <span><RiDownloadLine/></span></button>
        </div>
    )
}

export default DownloadBanner

