import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorsList, setErrorsList] = useState([])
  const {signup} = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        username:username, 
        password: password
      })
    })
    .then(resp => resp.json())
    .then(user => {
      if(!user.errors) {
        signup(user)
        navigate('/')
      } else {
        setUsername('')
        setPassword('')
        const errorList = user.errors.map(e => <li>{e}</li>)
        setErrorsList(errorList)
      }
    })
  }

  return (
    <div className='signup'>
      <span className='signupTitle'>CREATE ACCOUNT</span>
      <form  className='signupForm' onSubmit= { handleSubmit }>
          <label htmlFor="username">Username: </label>
          <input
            type="text" 
            name="username" 
            id="username" 
            className="signupInput"
            placeholder='Choose a username..'
            value={ username } 
            onChange={ e => setUsername(e.target.value)}
            autoFocus={ true }
          />  
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            className="signupInput"
            placeholder='Choose a password..'
            value={ password }
            onChange={ e => setPassword(e.target.value)}
          />
        <input className="signupButton" type="submit" value="Create Account"/>
      </form>
      <ul>
        {errorsList}
      </ul>
    </div>
  )
}

export default Signup