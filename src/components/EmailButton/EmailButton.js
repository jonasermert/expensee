import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./EmailButton.scss";

import "./Login/config/firebase_config.js";
import "./Login/login.js";
import "./Login/register.js";




const EmailButton = () => {
    return (

            <div>
                <nav>
                    <ul>
                        <li>
                            <Router>
                                <Switch>
                                    <Route loginpath = "./Login/login.js"><Login/></Route>
                                </Switch>
                            </Router>
                            <Link to="#"><div>Login</div></Link>
                        </li>
                        <li>
                            <Router>
                                <Switch>
                                    <Route registerpath = "./Login/register.js"><Register/></Route>
                                </Switch>
                            </Router>
                            <Link to="#"><div>Account erstellen mit Email</div></Link>
                        </li>
                    </ul>
                </nav> 
            </div>
     
    );
}

export default EmailButton;