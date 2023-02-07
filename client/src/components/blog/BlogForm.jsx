import React, { useContext, useState } from 'react'
import { UserContext } from '../context/User';
import "../blogStyle/blogForm.css"

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlog, errors, setErrors } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addBlog({
      title: title,
      content: content
    })
    setErrors('')
  }
  return (
    <div className="write">
      <div className='bar error'>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </ul>
        )}
      </div>
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type="text"
            id="content"
            placeholder="Write your blog..."
            name='content'
            className="writeInput writeText"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />  
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
      <hr/>
    </div>
  )
}

export default BlogForm