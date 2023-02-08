import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/User'
import './blogsReviewed.css'

const BlogsReviewed = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(UserContext)

  useEffect(() => {
    fetch('/reviews')
      .then(resp => resp.json())
      .then(data => {
        setReviews(data.filter(review => review.user.id === user.id))
      })
  }, [user.id])

  return (
    <div className='reviews'>
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
    </div>
  )
}

export default BlogsReviewed