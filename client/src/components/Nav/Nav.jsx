import { Link } from "react-router-dom";
import { useState } from "react";
import './Nav.css'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const Nav = (props) => {
  // const {children, currentUser, handleLogout } = props;
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <div className="navbar">
      <Link to='/'>
          <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <Link to='#'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
      </ul>
      </nav>
      </>
  );
};

export default Nav;
