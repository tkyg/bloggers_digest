import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../global'

const Signup = ({ loginUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
      headers,
      body: JSON.stringify({username, password}),
    })
    .then((r) => r.json())
    .then(data => {
      if(data.errors) {
        console.log(data.errors)
      } else {
        loginUser(data)
        navigate('/')
      }
    })
  }

  return (
    <div>
      <h2>Create Account</h2>
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
        <input type="submit" value="Create Account"/>
      </form>
    </div>
  )
}

export default Signup