import React, { useState, useContext } from 'react'
import BlogForm from '../blog/BlogForm'
import { UserContext } from '../context/User'
import UserBlogCard from '../blog/UserBlogCard'
import './profile.css'

const Profile = () => {
  const { user, loggedIn } = useContext(UserContext)
  const [formFlag, setFormFlag] = useState(false)

  if (loggedIn) {
    const userBlogsList = user.blogs.map((blog, index) => <UserBlogCard key={index} blog={blog}/>)
      return (
        <div className='profile'>
          {formFlag ?
            <BlogForm />
            :
            <div className="singleBlogWrite">
              <i className="fa-regular fa-pen-to-square" onClick={() => setFormFlag(true)}> 
                Write a Blog
              </i>
            </div>
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