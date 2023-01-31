import React from 'react'
import { NavLink} from "react-router-dom";
import "../blogStyle/blogCard.css"

const BlogCard = ({blog}) => {
  // console.log(blog)

  // const reviewsList = blog.reviews.map(review => <li key={review.id}>{review.comment}</li>)

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
      {/* <ul>
        {reviewsList}
      </ul> */}
    </div>
    )
  }
  
  export default BlogCard