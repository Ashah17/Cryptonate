
import NavCSS from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/teampage">Team</Link>
        </li>
        <li>
          <Link to ="/specificdonation">Donations</Link>
        </li>
        <li>
          <Link to ="/accountinfo">AccountInfo</Link>
        </li>
        <li>
          <Link to ="/contact">Contact</Link>
        </li>
        <li>
          <Link to ="/portalpage">Portal</Link>
        </li>
        <li>
          <Link to ="donationlisst">Donation List</Link>
        </li>
        <li style={{ float: 'right' }}>
          <Link to ="/newSignIn">Sign-In</Link>
        </li>
        <li style={{ float: 'right' }}>
          <Link to ="/newSignUp">Sign-Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;