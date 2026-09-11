import "./welcome.scss";
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import Bg from '../../img/background.png'



const Welcome = () => {


const { currentUser } = useAuth()


    return (
        <div>
            <div className="welconti">
                <h2 className="welc">Willkomen</h2>
                {currentUser.photoURL && <img className="userimg" src={currentUser.photoURL} alt="Profil" />}
                <h3 className="welcomeUser">{currentUser.displayName || currentUser.email}</h3>
                <Link to="/home">
                    <div className="losg">
                        <p className="texti">Los geht's</p></div></Link>
            </div>
            <div className="waveconti">
            <img id="footerBg" src={Bg}  alt="" />
        </div>
        </div>
    );
}

export default Welcome;
