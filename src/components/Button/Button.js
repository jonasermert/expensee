import '../Button/button.scss'
import {Link} from "react-router-dom";

const Button = () => {
    return (
        <nav>
        <ul>
            <li>
                <Link to="./Login/login.js"><div>Login mit Email</div></Link>
            </li>
            <li>
                <Link to="./Login/register.js"><div>Account erstellen mit Email</div></Link>
            </li>
        </ul>
    </nav>
    );
}

export default Button;