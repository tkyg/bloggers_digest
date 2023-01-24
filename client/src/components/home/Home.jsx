import React from 'react'
import Header from '../header/Header'
// import './home.css'


const Home = () => {
  return (
    <>
      <Header />
      <p>Welcome to Blogger's Digest.</p>
      <br/>
      <p>To enjoy the features of this website create an account by navigating to the Signup link.</p>
      <br/>
      <p>If you are a returning user navigate to Login.</p>
      <br/>
      <p>Once logged-in, a user can start reading blogs by navigating to Blogs page.</p>
      <br/>
      <p>A logged-in user can also, write a new blog, edit or delete a posted blog through the Profile page.</p>
    </>
  )
}


export default Home
