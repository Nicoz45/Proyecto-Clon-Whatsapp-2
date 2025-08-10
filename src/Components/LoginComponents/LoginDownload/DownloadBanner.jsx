import React from 'react'
import { RiDownloadLine } from "react-icons/ri";
import './downloadBanner.css'
import { Link } from 'react-router';
import ICONS from '../../../constants/Icons';
const DownloadBanner = () => {
    return (
        <div className="download-banner-container">
            <div>
                <img src="images/desktopwhatsapp.png" alt="desktop-download" width={70} />
            </div>
            <div className='download-banner-text'>
                <p className='download-banner-title'>Descarga WhatsApp para Windows</p>
                <p className='text-info-to-download'>Descarga la aplicación para Windows y haz llamadas, comparte 
                    pantalla y disfruta de una experiencia mas rapida.</p>
                <Link to="/chat" className='link-download'><span className='download-link-span'>Descargar aplicacion</span><ICONS.ArrowRightOpen/></Link>
            </div>
            <button className='download-button'>Descargar <span><RiDownloadLine/></span></button>
        </div>
    )
}

export default DownloadBanner

