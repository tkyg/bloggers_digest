import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('/me')
    .then(resp => resp.json())
    .then(data => {
      if(!data.message) {
        loginUser(data)
      } else {
        console.log(data.message)
      }
    })
  }, [])

  // useEffect(() => {
  //   fetch('/me')
  //   .then(resp => {
  //     if(resp.ok){
  //       resp.json().then(user => setCurrentUser(user))
  //     }
  //   })
  // }, []);
  // if (user){
  //   return <h2> Welcome, {user.username}!</h2>;
  // } else {
  //   return<Login onLogin={setUser} />
  //   }
  // }

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true)
  }
  

  return (
    <Router>
      <NavBar loggedIn={ loggedIn }/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup loginUser={ loginUser } /> } />
       </Routes>
    </Router>
  );
}

export default App;
