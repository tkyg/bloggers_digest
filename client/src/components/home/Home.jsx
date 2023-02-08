import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import Header from '../header/Header'
// import './home.css'


const Home = () => {
  const { loggedIn, user } = useContext(UserContext)

  if(loggedIn){
  return (
    <div>
      <Header />
      <p>Welcome {user.username} to your Home Page</p>
      <br/>
      <p> To start reading blogs posted by your fellow bloggers, navigate to Blogs page.</p>
      <br/>
      <p>Here you will be able to post comments on blogs written by our other users.</p>
      <br/>
      <p>To write a new blog, edit, or delete a posted blog navigate to your Profile page.</p>
      <br/>
      <p>For a list of all the blogs you have left a comment on navigate to Reviewed Blogs.</p>
    </div>
    )
  } else {
    return (
      <div>
        <Header />
        <p>Welcome to Blogger's Digest.</p>
        <br/>
        <p>To enjoy the features of this website create an account by navigating to Signup link.</p>
        <br/>
        <p>If you are a returning user navigate to Login.</p>
        <br/>
      </div>
    )

  }
}


export default Home
