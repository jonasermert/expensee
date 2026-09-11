import { Link } from 'react-router-dom';
import '../../App.scss';

const Email = () => (
  <div>
    <h1>Expensee</h1>
    <nav>
      <ul>
        <li><Link to="/"><div>Login</div></Link></li>
        <li><Link to="/register"><div>Account erstellen mit Email</div></Link></li>
      </ul>
    </nav>
  </div>
);

export default Email;
