import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/Profile';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('/me')
    .then(resp => resp.json())
    .then(data => {
      setCurrentUser(data)
      data.error ? setLoggedIn(false) : setLoggedIn(true)
    })
  }, [])

  const loginUser = currentUser => {
    setCurrentUser(currentUser);
    setLoggedIn(true)
  }
  
  const logoutUser = () => {
    setCurrentUser({})
    setLoggedIn(false);
  }

  return (
    <Router>
      <NavBar currentUser={currentUser} loggedIn={ loggedIn } logoutUser={ logoutUser }/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login loginUser={ loginUser }/> } />
        <Route path="/signup" element={ <Signup loginUser={ loginUser } /> } />
        <Route path="/profile" element={ <Profile /> } />
       </Routes>
    </Router>
  );
}


export default App;
