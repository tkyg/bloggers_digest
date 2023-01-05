import React, { useState } from 'react'
import { headers } from '../../global'
const Login = ({ loginUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    fetch('/login', {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password})
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.errors) {
        console.log(data.errors)
      } else {
        loginUser(data)
      }
    })
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit= { handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text" 
            name="username" 
            id="username" 
            value={ username } 
            onChange={ e => setUsername(e.target.value)}
            autoFocus={ true }
          />  
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ e => setPassword(e.target.value)}
          />
        </div> <br />
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login
