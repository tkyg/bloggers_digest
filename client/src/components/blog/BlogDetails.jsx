
import React, {useState, useEffect, useContext }from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User'
import ReviewForm from '../review/ReviewForm'
import '../blogStyle/blogDetails.css'

const BlogDetails = () => {
  const [singleBlog, setSingleBlog] = useState({})
  const { user, setUser, setBlogs } = useContext(UserContext)
  const {id} = useParams()
  const [currentBlog, setCurrentBlog] = useState({reviews: []})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/blogs/${id}`)
      .then(resp => resp.json())
      .then(data => {
        setSingleBlog(data)
        setCurrentBlog(data)
      })
  }, [id])

  const deleteBlog = async id => {
    await fetch(`/blogs/${id}`, { method: "DELETE"})
    const newBlogs = (user.blogs.filter(blog => blog.id !== id))
    const userCopy = {...user}
    userCopy.blogs = newBlogs
    setUser(userCopy)
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id)) 
    navigate('/profile')
  }

  const addReview = (data) => {
    console.log(data)
    setCurrentBlog(data)
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
          <NavLink to={'/blogs'}>
            <div className="singleBlogReturn">
              <i className="fa-solid fa-arrow-left"> Return
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
        <div> Comments:
          {currentBlog.reviews.map((review, index) => (
            <div key={index}>
              <p>{review.comment}</p>
            </div>
            ))}    
        </div>
      </div>
      )
  } else {
    return (
      <div className="singleBlog">
        <NavLink to={'/blogs'}>
          <div className="singleBlogReturn">
            <i className="fa-solid fa-arrow-left"> Back to Blogs
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
        <br/>
        <ReviewForm addReview={addReview}/>
        <br/>
        <div> 
          Comments:
          {currentBlog.reviews.map(review => (
            <div key={review.id}>
              <li>{review.comment}</li>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default BlogDetails



