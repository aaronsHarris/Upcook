import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
const Nav = (props) => {
  const {children, currentUser, handleLogout } = props;
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          </ul>
          <div>
          </div>
          {currentUser ? (
          <div className="flex flex-col justify-end my-10 mr-24 w-0">
            <p className="text-2xl mb-10 font-bold"> {currentUser.username}</p>
            <button onClick={handleLogout}>SignOut</button>
          </div>
        ) : (
  <div></div>
  )}
      </nav>
        {children}
        </IconContext.Provider>
    </>
  );
};

export default Nav;
