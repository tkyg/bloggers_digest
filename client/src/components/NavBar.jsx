import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({ loggedIn }) => {

  const handleLogout = e => {
    e.preventDefault();
  }

  const loggedInRoutes = () => {
    return(
      <>
        <li><Link to="/profile">Profile</Link></li>
        <li><a href="#" onClick={ handleLogout }>Logout</a></li>
      </>
    )
  }

  const loggedOutRoutes = () => {
    return(
      <>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </>
    )
  }

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      { loggedIn ? loggedInRoutes() : loggedOutRoutes() }
    </ul>
  )
}

export default NavBar