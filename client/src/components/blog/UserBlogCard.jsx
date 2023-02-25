import React from 'react'
import { NavLink } from "react-router-dom";
import '../blogStyle/userBlogCard.css'

const UserBlogCard = ({blog}) => {
  return (
    <div className="blog">
      <div className="blogInfo">
        <NavLink style={{textDecoration: "none"}} to={`/blogs/${blog.id}`}>
          <span className="blogTitle" style={{textDecoration: "none"}}>
            {blog.title}
          </span>
        </NavLink>
        <p className='blogContent'>{blog.content}</p>
      </div>
    </div>
  )
}

export default UserBlogCard