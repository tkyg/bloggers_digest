import React, { useState } from 'react'

const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
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