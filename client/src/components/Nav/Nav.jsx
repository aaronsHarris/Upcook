import { Link } from "react-router-dom";
import './Nav.css'

const Nav = (props) => {
  const {children, currentUser, handleLogout } = props;
  return (
    <div>
    <nav>
      <div className="navbar">
      {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div></div>
        )}
        <Link to='/'>Home</Link>
        <Link to='/recipes'>Recipes</Link>
        <Link to='/learn'>Learn</Link>
        <Link to='/signin'>Sign in</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
      </nav>
      {children}
      </div>
  );
};

export default Nav;
