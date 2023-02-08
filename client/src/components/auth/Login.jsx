import React, { useState, useContext } from 'react'
import { headers } from '../../global'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User'
import './login.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorsList, setErrorsList] = useState([])
  const {login} = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    fetch('/login', {
      method: "POST",
      headers,
      body: JSON.stringify({ 
        username: username, 
        password: password
      })
    })
    .then(resp => resp.json())
    .then(user => {
     if(!user.errors) {
        login(user)
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
    <div className="login">
      <span className='loginTitleLabel'>LOGIN</span>
        <form className='loginForm' onSubmit= { handleSubmit }>
          <label htmlFor="username">Username: </label>
          <input
            type="text" 
            name="username" 
            id="username" 
            className="loginInput"
            placeholder='Enter your username..'
            value={ username } 
            onChange={ e => setUsername(e.target.value)}
            autoFocus={ true }
          />  
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            className="loginInput"
            placeholder='Enter your password..'
            value={ password }
            onChange={ e => setPassword(e.target.value)}
          />
          <button className="loginButton">Login</button>
        </form>
        <ul>
        {errorsList}
      </ul>
    </div>
  )
}

export default Login
