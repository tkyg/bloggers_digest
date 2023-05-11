import React, {useState, useEffect, useContext }from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User'
import ReviewForm from '../review/ReviewForm'
import '../blogStyle/blogDetails.css'

const BlogDetails = () => {
  const { user, setUser, setBlogs, loggedIn } = useContext(UserContext)
  const [currentBlog, setCurrentBlog] = useState({reviews: []})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/blogs/${id}`)
      .then(resp => resp.json())
      .then(data => {
        setCurrentBlog(data)
      })
  }, [id])

  const deleteBlog = async id => {
    await fetch(`/blogs/${id}`, { method: "DELETE"})
    const filteredBlogs = (user.blogs.filter(blog => blog.id !== id))
    const userCopy = {...user}
    userCopy.blogs = filteredBlogs
    setUser(userCopy)
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id)) 
    navigate('/profile')
  }

  const addReview = (data) => {
    setCurrentBlog(data)
  }

  if (loggedIn) {
    if(user.id && currentBlog.user && user.id === currentBlog.user.id){
      return (
        <div>
          <div className="singleBlog">
            <div className="singleBlogWrapper">
              <NavLink to={`/blogs/${id}/edit`}>
                <div className="singleBlogEdit">
                  <i className="singleBlogIcon fa-regular fa-pen-to-square"> 
                    Edit Blog
                  </i>
                </div>
              </NavLink>
                <div className="singleBlogDelete">
                  <i className="singleBlogIcon fa-regular fa-trash-can" onClick={() => deleteBlog(currentBlog.id)}>
                    Delete Blog
                  </i>
                </div>
              <NavLink to={'/blogs'}>
                <div className="singleBlogReturn">
                  <i className="fa-solid fa-arrow-left"> 
                    Return
                  </i>
                </div>
              </NavLink>
              <br/>
              <h1 className="singleBlogTitle">
                {currentBlog.title}
              </h1>
              <p className='singleBlogContent'>
                {currentBlog.content}
              </p>
            </div>
          </div>
          <br/>
          <br/>
          <div className='comment'>Comments</div>
          <br/>
          <div className='commentText'>
          <br/>
            {currentBlog.reviews.map((review) => (
              <div className='commentText' key={review.id}>
                <span className='userReviewAuthor'>{review.user.username}: </span>
                <span className='userReviewComment'>{review.comment}</span>
              </div>
            ))}            
          </div>
        </div>
        )
    } else {
      return (
        <div>
          <div className="singleBlog">
            <NavLink to={'/blogs'}>
              <div className="singleBlogReturn">
                <i className="fa-solid fa-arrow-left"> 
                  Back to Blogs
                </i>
              </div>
            </NavLink>
            <br/>
            <h1 className="singleBlogTitle">
              {currentBlog.title}
            </h1>
            <p className='singleBlogContent'>
              {currentBlog.content}
            </p>
            <br/>
          </div>
          <br/>
          <br/>
            <ReviewForm addReview={addReview}/>
          <br/>
            <div className='comment'>Comments</div>
            <br/>
            {currentBlog.reviews.map((review, index) => (
              <div className='commentText' key={index}>
                <span className='userReviewAuthor'>{review.user.username}: </span>
                <span className='userReviewComment'>{review.comment}</span>
              </div>
            ))}
        </div>
      )
    }
  } else {
    return (
      <div style={{fontFamily: 'Aboreto', color: '#b43a3a', lineHeight : 10, padding: 20}}>Please log in to access this page</div>
    )
  }
}
export default BlogDetails