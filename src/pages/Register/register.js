import "./register.scss";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import shapeImg from '../../img/shape.png'
import Bg from '../../img/background.png'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { register, currentUser } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(email, password)
        register(email, password)
        
    }


    return (
        <div className="regis" >
                <Link to='/'>
                    <img src={shapeImg} alt='shape' />
                </Link>
            <h1 className="registerh1">Expensee</h1>
            <h3 className="registerh3">Account erstellen</h3>
            <form className="registerMail" onSubmit={handleSubmit}>
                <div className="conti">
                    <input 
                        className="infield"
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input 
                        className="infield"
                        type="password" 
                        name="password" 
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />
                </div>
                <button className="signUpB" type="submit">Sign Up</button>
            </form>

            <div className="waveconti">
                <img id="footerBg" src={Bg}  alt="" />
        </div>
        </div>

    );
}

export default Register;