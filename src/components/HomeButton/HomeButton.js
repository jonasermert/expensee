import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./HomeButton.scss";
const HomeButton = () => {
    return (

        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="./Login/login.js"><div>Login mit Email</div></Link>
                    </li>
                    <li>
                        <Link to="./Login/register.js"><div>Login mit Google</div></Link>
                    </li>
                    <li>
                        <Link to="./Login/register.js"><div>Account erstellen mit Email</div></Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default HomeButton;