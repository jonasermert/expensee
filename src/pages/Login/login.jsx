import "./login.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import Bg from '../../img/background.png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

const { login, signInWithGoogle, signInWithTwitter, signInWithGitHub } = useAuth()

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await login(email, password)
    } catch {
        setError('Die Anmeldung ist fehlgeschlagen. Bitte prüfe deine Zugangsdaten.')
    }
}


    return (
        <div>
        <div className="mail" >
            <h3 className="LoginH3">Willkommen bei</h3>
            <h1 className="LoginH1">Expensee</h1>
            <form className="loginMail" onSubmit={handleSubmit}>
                <input 
                    className="infield"
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    /><br />
                <input 
                    className="infield"
                    type="password" 
                    name="password" 
                    placeholder="Passwort"
                    onChange={(e) => setPassword(e.target.value)}
                    /><br />
                <div className="reg">Noch nicht registriert? <Link to="/register"><div>Sign Up</div></Link></div>

                {error && <p role="alert">{error}</p>}
                <button className="subB" type="submit">Login</button>
                <p>oder Login mit</p>
                    <div className="buttons">
                        <div className="container">
                        <div className="buttonG" onClick={() => 
                            signInWithGoogle()
                            .then(user => console.log(user))
                            .catch(error => console.log(error))
                            }></div>
                        </div>
                        <div className="container">
                        <div className="buttonT" onClick={() => 
                            signInWithTwitter()
                            .then(user => console.log(user))
                            .catch(error => console.log(error))
                            }></div>
                        </div>
                        <div className="container">
                        <div className="buttonH" onClick={() => 
                            signInWithGitHub()
                            .then(user => console.log(user))
                            .catch(error => console.log(error))
                            }></div>
                        </div>
                    </div>
            </form>
        </div>
        <div className="waveconti">
            <img id="footerBg" src={Bg}  alt="" />
        </div>
        </div>
    );
}

export default Login;
