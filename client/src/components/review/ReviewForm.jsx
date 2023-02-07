import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/User'

const ReviewForm = ({addReview}) => {
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({})
  const { user } = useContext(UserContext)
  const { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
      await fetch(`/blogs/${id}/reviews`, {
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({
          review: {comment}
        })
      })
      .then(resp => {
        if (!resp.ok) {
          throw resp;
        }
        return resp.json();
      })
      .then(data => {
        setComment('')
        addReview(data)
        // blog object
        setErrors({})
      })
      .catch(error => {
        return error.json().then(errorJson => {
          setErrors(errorJson.errors);
        })
      })
  }
  if(user){
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            type="text"
            placeholder="Write a comment..."
            value = {comment}
            onChange= {(e) => setComment(e.target.value)}
          />
          {errors.comment && (
            <ul style={{ color: "red" }}>
              Please {errors.comment}
            </ul>
          )}
        </div>
        <button type="submit" onClick={handleSubmit} disabled={!comment}>Comment</button>
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