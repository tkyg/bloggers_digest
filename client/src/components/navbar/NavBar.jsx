import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.css"

const NavBar = () => {
  const {user, logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(() => {
      logout()
      navigate('/')
    })
  }
  if (loggedIn) {
    return (
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"><Link to='/' className="link">Home</Link></li>
            <li className="topListItem"><Link to='/blogs' className="link">Blogs</Link></li>
            <li className="topListItem"><Link to='/profile' className="link">Profile</Link></li>
            <li className="topListItem"><Link to='/reviews' className="link">Commented Blogs</Link></li>
          </ul>
        </div>
        <div className="topRight">
            <li className="topRightList">Welcome {user.username}</li>
            <li className="logoutButton"><Link to="/logout" className="link" onClick={logoutUser}>Logout</Link></li>
        </div>
      </div>
    )
  } else {
    return (
      <div className="topCenter">
        <ul className="topList">
        <li className="topListItem"><Link to='/login' className="link">Login</Link></li>
        <li className="topListItem"><Link to='/signup' className="link">Signup</Link></li>    
        </ul>
      </div>
    )
  }
}
export default NavBar