import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const UserContext = React.createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/me')
    .then(resp => resp.json())
    .then(data => {
      setUser(data)
      if (data.error) {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
        fetchBlogs()
      }
    })
  }, [])

  const fetchBlogs = () => {
    fetch('/blogs')
    .then(resp => resp.json())
    .then(data => {
      setBlogs(data)
    })
  }

  const addBlog = (blog) => {
    fetch('/blogs', {
      method: "POST",
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify({
        title: blog.title,
        content: blog.content
      })
    })
    .then(resp => resp.json())
    .then(data => {
      const newBlogList = [data, ...blogs]
      const userNewBlogsList = newBlogList.filter(blog => blog.user.id === data.user.id)
      const userCopy = {...user}
      userCopy.blogs = userNewBlogsList
      setUser(userCopy)
      setBlogs(newBlogList)
      navigate('/blogs')
    })
  }

  const login = (user) => {
    setUser(user)
    fetchBlogs()
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setBlogs([])
    setLoggedIn(false)
  }
  const signup = (user) => {
    setUser(user)
    fetchBlogs()
    setLoggedIn(true)
  }

  return (
    <UserContext.Provider value={{user, login, logout, signup, loggedIn, blogs, addBlog, setUser, setBlogs}}>
      {children}
    </UserContext.Provider>
  )

}

export { UserContext, UserProvider };