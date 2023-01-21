import React, {useState, useEffect, useContext }from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User'
import './blogDetails.css'

const BlogDetails = () => {
  const [ singleBlog, setSingleBlog ] = useState('')
  const { setUser, setBlogs, user } = useContext(UserContext)
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/blogs/${id}`)
      .then(response => response.json())
      .then(data => {
        setSingleBlog(data)
      })
  }, [])

  const deleteBlog = async id => {
    const response = await fetch(`/blogs/${ id }`, { method: "DELETE"})
    // => get user's blogs and filter out the one we dont want anymore. 
    const newBlogs = (user.blogs.filter(blog => blog.id !== id))
    const userCopy = {...user}
    // => replace current value of blogs(which is an object) with updated array. 
    userCopy.blogs = newBlogs
    // console.log(userCopy)
    setUser(userCopy)
    
    setBlogs((blogs) => blogs.filter((blog) => blog.id !== id)) 
    navigate('/profile')
  }

  if(user.id && singleBlog.user && user.id === singleBlog.user.id){
    return (
      <div className="singleBlog">
        <div className="singleBlogWrapper">
          <NavLink to={`/blogs/${id}/edit`}>
            <div className="singleBlogEdit">
              <i className="singleBlogIcon fa-regular fa-pen-to-square"> Edit Blog
              </i>
            </div>
          </NavLink>
          <div className="singleBlogDelete">
            <i className="singleBlogIcon fa-regular fa-trash-can" onClick={() => deleteBlog(singleBlog.id)}> Delete Blog
            </i>
          </div>
          <NavLink to={'/profile'}>
            <div className="singleBlogReturn">
              <i class="fa-solid fa-arrow-left"> Return
              </i>
            </div>
          </NavLink>
          <br/>
          <h1 className="singleBlogTitle">
            {singleBlog.title}
          </h1>
          <p className='singleBlogContent'>
            {singleBlog.content}
          </p>
        </div>
      </div>
      )
  } else {
    return (
      <div className="singleBlog">
        <NavLink to={'/blogs'}>
          <div className="singleBlogReturn">
            <i class="fa-solid fa-arrow-left"> Back to Blogs
            </i>
          </div>
        </NavLink>
        <br/>
        <h1 className="singleBlogTitle">
          {singleBlog.title}
        </h1>
        <p className='singleBlogContent'>
          {singleBlog.content}
        </p>
        {/* <span className='blogAuthor'>Written By: {singleBlog.user.username}</span> */}
      </div>
    )
  }
}
export default BlogDetails