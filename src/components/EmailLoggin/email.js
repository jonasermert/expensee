import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../../App.scss'; 

import "./Login/config/firebase_config.js";
import "./Login/login.js";
import "./Login/register.js";



const Email = () => {
    return (

            <div>
                <h1>Expensee</h1>
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

export default Email;