import React from 'react'
import './loginScreen.css'
import LoginHeader from '../../Components/LoginComponents/LoginHeader/LoginHeader'
import DownloadBanner from '../../Components/LoginComponents/LoginDownload/DownloadBanner'
import LoginStepsAndQr from '../../Components/LoginComponents/LoginSteps/LoginSteps'
import LoginFooter from '../../Components/LoginComponents/LoginFooter/LoginFooter'

const LoginScreen = () => {
    return (
        <div className='login-screen'>
            <header><LoginHeader /></header>
            <main className='main-general-container'>
                <DownloadBanner />
                <LoginStepsAndQr />
            </main>
            <footer><LoginFooter /></footer>
        </div>
    )
}

export default LoginScreen
