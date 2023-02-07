import React from 'react'
import { NavLink} from "react-router-dom";
import "../blogStyle/blogCard.css"

const BlogCard = ({blog}) => {

  return (
    <div className="blog">
      <div className="blogInfo">
        <NavLink to={`/blogs/${blog.id}`}>
          <span className="blogTitle" style={{textDecoration: "none"}}>
            {blog.title}
          </span>
        </NavLink>
        <p className='blogContent'>{blog.content}</p>
        <span className='blogAuthor'>
          Written By: {blog.user.username}
        </span>
        <br/>
      </div>
    </div>
    )
  }
  
  export default BlogCard