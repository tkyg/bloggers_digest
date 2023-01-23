import React from 'react'
import { NavLink } from "react-router-dom";
import '../blogStyle/userBlogCard.css'

const UserBlogCard = ({blog}) => {
  // console.log(blog)
  return (
    <div className="blog">
      <div className="blogInfo">
        <NavLink to={`/blogs/${blog.id}`}>
          <span className="blogTitle" style={{textDecoration: "none"}}>
            {blog.title}
          </span>
        </NavLink>
        <p className='blogContent'>{blog.content}</p>
        {/* <p>{blog.username}</p> */}
      </div>
    </div>
  )
}

export default UserBlogCard