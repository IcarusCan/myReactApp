import { Link } from 'react-router-dom';

import NavBarItems from './NavBarItems';
import navBarData from './navBar.json';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar_info">
          <Link to="/">
            <h1 className="logo">Booking Website</h1>
          </Link>
          <div className="user_func">
            <button className="btn btn-user">Register</button>
            <button className="btn btn-user">Login</button>
          </div>
        </div>
        <NavBarItems navBarData={navBarData} />
      </div>
    </nav>
  );
};

export default NavBar;
