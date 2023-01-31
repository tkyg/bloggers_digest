import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/User'

const ReviewForm = ({addReview}) => {
  // const [showForm, setShowForm] = useState(false)
  const [comment, setComment] = useState('')
  const { user, setUser, setBlogs } = useContext(UserContext)
  const { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
      const response = await fetch(`/blogs/${id}/reviews`, {
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({
          review: {comment}
        })
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setComment('')
        addReview(data)
        // setBlogs(data)
      })
      .catch(error => {
        console.error(error)
      })
    }

  if(user){
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange= {(e) => setComment(e.target.value)}/>
        </div>
        <button type="submit" onClick={handleSubmit}>Comment</button>
      </form>
    )
  } else {
    return (
      <h3>
        Please Login
      </h3>
    )
  }
}

export default ReviewForm