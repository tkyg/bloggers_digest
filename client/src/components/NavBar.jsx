import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const handleLogout = e => {
    e.preventDefault();
  }

  return (
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/signup">Signup</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/profile">Profile</Link></li>
    <li><a href="#" onClick={ handleLogout }>Logout</a></li>
    
  </ul>
  )
}

export default NavBar