import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className='NavContainer'>
            <Link to='/'>
                Home
            </Link>
            <Link to='/recipes'>
                Recipes
            </Link>
            <Link to='/learn'>
                Learn
            </Link>
            <Link to='signin'>
                Sign In
            </Link>
            <Link to='signup'>
                Sign Up
            </Link>
        </div>
    )
}

export default Nav
