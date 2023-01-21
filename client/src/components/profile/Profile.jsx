import React, { useState, useContext } from 'react'
import BlogForm from '../blog/BlogForm'
import { UserContext } from '../context/User'
import UserBlogCard from '../blog/UserBlogCard'
import './profile.css'

const Profile = () => {
  const { user, loggedIn } = useContext(UserContext)
  const [formFlag, setFormFlag] = useState(false)

  const addBlogFlag = () => {
    setFormFlag(false)
  }
  
  // to remove deleted blog from frontend i have to change from user.blogs.map((blog, index)=>... to blogs.map)
  // orelse my filter method on setUser within my Blog Details does not change my blogs list in profile page. 
  if (loggedIn) {
    const userBlogsList = user.blogs.map((blog, index) => <UserBlogCard key={index} blog={blog}/>)
  //  debugger
      return (
        <div className='profile'>
          {formFlag ?
          <BlogForm addBlogFlag={addBlogFlag}/>
          :
          <div className="singleBlogWrite"><i class="fa-regular fa-pen-to-square" onClick={() => setFormFlag(true)}> Write a Blog</i></div>
          // <button onClick={() => setFormFlag(true)}></button>
          }
          {userBlogsList}
        </div>
  )
} else {
  return (
    <h3>Not Authorized - Please Signup or Login</h3>
  )
}
}

export default Profile