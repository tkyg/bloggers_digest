import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User';
import '../blogStyle/editBlog.css'


const EditBlog = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [blog, setBlog] = useState('')
  const { id } = useParams()
  const { setUser, setBlogs, user, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/blogs/${ id }`)
      .then(response => response.json())
      .then(data => {
        setBlog(data)
        setTitle(data.title)
        setContent(data.content)
      })
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    const options = {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: title,
        content: content,
      })
    }
    await fetch(`/blogs/${ id }`, options)
    .then(resp => resp.json())
    .then(data => {
      setBlogs((blogs)=>blogs.map(blog =>{
      if(blog.id === data.id){
        return data
      } else {
        return blog
      }}))
      const updatedBlogs = (user.blogs.map(blog => {
        if(blog.id === data.id){
          return data
        } else {
          return blog
        }}
        ))
      const updatedUserCopy = {...user}
      updatedUserCopy.blogs = updatedBlogs
      setUser(updatedUserCopy)
  })
    navigate(`/blogs/${id}`)
  } 

if (loggedIn){
  return (
    <div className="write">
      <form className='writeForm' onSubmit={ handleSubmit }>
        <div className="writeFormGroup">
          <label htmlFor="title"></label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            className="writeInput"
            value={title} 
            onChange={e => setTitle(e.target.value)} autoFocus={ true }
          />
        </div> <br />
        <div>
          <label htmlFor="content"></label>
          <textarea 
            type="text" 
            name="content" 
            id="content" 
            className="writeInput writeText"
            value={content} 
            onChange={e => setContent(e.target.value)}
          />
        </div> <br />
        <div><input className="writeSubmit" type="submit" value="Update Blog" /></div>
      </form>
    </div>
  )
} else {
  return (
    <h3>Not Authorized - Please Signup or Login</h3>
  )
}
}

export default EditBlog