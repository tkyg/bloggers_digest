import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/User';
import './blogsReviewed.css'

const BlogsReviewed = () => {
  const [reviews, setReviews] = useState([]);
  const { loggedIn } = useContext(UserContext)

  useEffect(() => {
    fetch('/reviews')
      .then(resp => resp.json())
      .then(data => {
        setReviews(data)
      })
  }, [])


  if (loggedIn) {
  return (
    <div className='reviews'>
      {reviews.length > 0 ? (
      <div className='reviewInfo'>
        {reviews.map(review => (
          <div className='review' key={review.id}>
            <p className='blogReviewTitle'>{review.blog.title}</p>
            <p className='blogReviewContent'>{review.blog.content}</p>
            <p className='reviewAuthor'>Comment: {review.comment}</p>
            <p className='reviewAuthor'>Written By: {review.user.username}</p>
            <br />
          </div>
        ))}
      </div>
      ) : (
        <div className='noCommentsMsg'>
          There are no blogs you've commented on.
        </div>
      )}
    </div>
  )
} else {
  return (
    <div style={{fontFamily: 'Aboreto', color: '#b43a3a', lineHeight : 10, padding: 20}}>Please log in to access this page</div>
  )
}
}

export default BlogsReviewed