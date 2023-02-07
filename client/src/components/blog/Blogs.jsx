import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import BlogCard from '../blog/BlogCard'
import "../blogStyle/blogs.css"

const Blogs = () => {
  const { blogs, loggedIn } = useContext(UserContext)

  if(loggedIn) {
    const blogsList = blogs.map((blog, index) => <BlogCard key={index} blog={blog}/>)
    return (
      <div className='blogs'>
        <br/>
        <span>
          {blogsList}
        </span>
      </div>
    )
  } else {
    return (<h3>Please Login or Signup to Read and Post a Blog</h3>)
  }
}

export default Blogs