import React, {useContext} from 'react'
import { NavLink} from "react-router-dom";
import { UserContext } from '../context/User';
import "../blogStyle/blogCard.css"

const BlogCard = ({blog}) => {

  const { loggedIn } = useContext(UserContext)

  if (loggedIn) {
    return (
      <div className="blog">
        <div className="blogInfo">
          <NavLink style={{textDecoration: "none"}} to={`/blogs/${blog.id}`}>
            <span className="blogTitle">
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
  } else {
    return (
      <div style={{fontFamily: 'Aboreto', color: '#b43a3a', lineHeight : 10, padding: 20}}>Please log in to access this page</div>
    )
  }
}
  
  export default BlogCard