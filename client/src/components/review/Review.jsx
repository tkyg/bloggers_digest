import React, {useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/User'

const Review = () => {
  const [ reviews, setReviews ] = useState('');
  const { blogs } = useContext(UserContext)

  useEffect(() => {
    fetch('/reviews')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setReviews(data)
      })
  }, [])
console.log(blogs)
  const reviewCard = blogs.review.map((review, index) => <li>{review.comment}</li>)
  return (
    <div>
      review
      {/* <p>{reviewCard}</p> */}
    </div>
  )
}

export default Review