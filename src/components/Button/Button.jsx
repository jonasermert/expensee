import '../Button/button.scss'
import {Link} from "react-router-dom";

const Button = () => {
    return (
        <nav>
        <ul>
            <li>
                <Link to="/"><div>Login mit Email</div></Link>
            </li>
            <li>
                <Link to="/register"><div>Account erstellen mit Email</div></Link>
            </li>
        </ul>
    </nav>
    );
}

export default Button;
