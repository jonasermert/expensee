import { Link } from 'react-router-dom';
import './EmailButton.scss';

const EmailButton = () => (
  <nav>
    <ul>
      <li><Link to="/"><div>Login</div></Link></li>
      <li><Link to="/register"><div>Account erstellen mit Email</div></Link></li>
    </ul>
  </nav>
);

export default EmailButton;
