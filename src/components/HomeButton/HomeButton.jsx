import { Link } from "react-router-dom";
import "./HomeButton.scss";
const HomeButton = () => {
    return (

        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><div>Login mit Email</div></Link>
                    </li>
                    <li>
                        <Link to="/"><div>Login mit Google</div></Link>
                    </li>
                    <li>
                        <Link to="/register"><div>Account erstellen mit Email</div></Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default HomeButton;
