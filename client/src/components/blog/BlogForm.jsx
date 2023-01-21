import React, { useContext, useState } from 'react'
import { UserContext } from '../context/User';
import "./blogForm.css"

const BlogForm = ({addBlogFlag}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlog } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addBlog({
      title: title,
      content: content
    })
    addBlogFlag()
  }
  return (
    <div className="write">
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