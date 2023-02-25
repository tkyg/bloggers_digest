import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/User'
import '../review/reviewForm.css'

const ReviewForm = ({addReview}) => {
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({})
  const { loggedIn } = useContext(UserContext)
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
        addReview(data)
        setComment('')
        setErrors({})
      })
      .catch(error => {
        return error.json().then(errorJson => {
          setErrors(errorJson.errors);
        })
      })
  }
  if(loggedIn){
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            type="text"
            placeholder="Write a comment..."
            className='textArea'
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
      <div style={{fontFamily: 'Aboreto', color: '#b43a3a', lineHeight : 10, padding: 20}}>Please log in to access this page</div>
    )
  }
}

export default ReviewForm