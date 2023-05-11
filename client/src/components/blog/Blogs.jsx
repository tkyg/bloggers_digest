import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import BlogCard from '../blog/BlogCard'
import "../blogStyle/blogs.css"

const Blogs = () => {
  const { blogs, loggedIn } = useContext(UserContext)

  if(loggedIn) {
    const blogsList = blogs.map((blog) => <BlogCard key={blog.id} blog={blog}/>)
    return (
      <div className='blogs'>
        <br/>
        <span>
          {blogsList}
        </span>
      </div>
    )
  } else {
    return (
      <div style={{fontFamily: 'Aboreto', color: '#b43a3a', lineHeight : 10, padding: 20}}>
        Please log in to access this page
      </div>
    )
  }
}

export default Blogs
