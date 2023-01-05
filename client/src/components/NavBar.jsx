import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NavBar = ({ currentUser, loggedIn, logoutUser }) => {

  const navigate = useNavigate()

  const handleLogout = e => {
    e.preventDefault();
    fetch('/logout', {
      method: "DELETE",
    })
    .then(() => {
      logoutUser()
      navigate('/')
    })
  }

//   function handleLogout() {
//   fetch('/logout', {
//     method: 'DELETE',
//   }).then(() => logoutUser())
// }

  // const handleLogout = e => {
  //   e.preventDefault();
  //   fetch('/logout')
  //   .then(resp => {
  //     logoutUser()
  //   })
  // }

  const loggedInRoutes = () => {
    return(
      <>
        <li><Link to="/profile">Profile</Link></li>
        <h3>Welcome {currentUser.username}</h3>
        <button onClick={handleLogout}>Logout</button>
        {/* <li><Link to="/logout" onClick={ handleLogout }>Logout</Link></li> */}
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