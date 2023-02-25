import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User';
import '../blogStyle/editBlog.css'


const EditBlog = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState("")
  const { id } = useParams()
  const { setUser, setBlogs, user, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/blogs/${id}`)
      .then(resp => resp.json())
      .then(data => {
        setTitle(data.title)
        setContent(data.content)
      })
  }, [id])

  const handleSubmit = async e => {
    e.preventDefault();
    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      })
    }
    await fetch(`/blogs/${ id }`, options)
      .then((resp) => {
        if (!resp.ok) {
          resp.json().then((data) => {
            setError(data.error)
          });
        } else {
        resp.json()
        .then(data => {
          setBlogs((blogs)=>blogs.map(blog =>{
            if(blog.id === data.id){
              return data
            } else {
              return blog
            }
          }))

          const updatedBlogs = (user.blogs.map(blog => {
            if(blog.id === data.id){
              return data
            } else {
              return blog
            }
          }))

          setUser(prevUser => ({...prevUser, blogs: updatedBlogs}))
          setError("")
          navigate(`/blogs/${id}`)
          })
        }
      })
    }

  if (loggedIn){
    return (
      <div className="write">
        <div style={{ color: "red" }}>
          {error.title && <p>{`Title ${error.title}`}</p>}
          {error.content && error.content.map((errMsg, index) => (
            <p key={index}>{`Content ${errMsg}`}</p>
          ))}
        </div>
        <form className='writeForm' onSubmit={ handleSubmit }>
          <div className="writeFormGroup">
            <label htmlFor="title"></label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="writeInput"
              autoFocus={ true }
              value={title} 
              onChange={e => setTitle(e.target.value)} 
            />
          </div> <br />
          <div>
            <label htmlFor="content"></label>
            <textarea 
              type="text" 
              id="content" 
              name="content" 
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
      <h3 style={{fontFamily: 'Aboreto', color: '#b43a3a', lineHeight : 10, padding: 20}}>Please log in to access this page</h3>
    )
  }
}

export default EditBlog

// import React, { useState, useEffect, useContext } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { UserContext } from '../context/User';
// import '../blogStyle/editBlog.css'


// const EditBlog = () => {
//   const [title, setTitle] = useState("")
//   const [content, setContent] = useState("")
//   const [error, setError] = useState("")
//   const { id } = useParams()
//   const { setUser, setBlogs, user, loggedIn } = useContext(UserContext)
//   const navigate = useNavigate()

//   useEffect(() => {
//     fetch(`/blogs/${ id }`)
//       .then(resp => resp.json())
//       .then(data => {
//         console.log(data)
//         setTitle(data.title)
//         setContent(data.content)
//       })
//   }, [id])

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const options = {
//       method: 'PATCH',
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         title: title,
//         content: content,
//       })
//     }
//     await fetch(`/blogs/${ id }`, options)
//       .then(resp => resp.json())
//       .then(data => {
//         setBlogs((blogs)=>blogs.map(blog =>{
//           if(blog.id === data.id){
//             return data
//           } else {
//             return blog
//           }})
//         )
//         // setBlogs(data)
//         const updatedBlogs = (user.blogs.map(blog => {
//           if(blog.id === data.id){
//             return data
//           } else {
//             return blog
//           }})
//         )
//         setUser(prevUser => ({...prevUser, blogs: updatedBlogs}))
//         // const updatedUserCopy = {...user}
//         // updatedUserCopy.blogs = updatedBlogs
//         // setUser(updatedUserCopy)
//         setError("")
//         navigate(`/blogs/${id}`)
//         })
//       }

//   if (loggedIn){
//     return (
//       <div className="write">
//         <form className='writeForm' onSubmit={ handleSubmit }>
//           <div className="writeFormGroup">
//             <label htmlFor="title"></label>
//             <input 
//               type="text" 
//               id="title" 
//               name="title" 
//               className="writeInput"
//               autoFocus={ true }
//               value={title} 
//               onChange={e => setTitle(e.target.value)} 
//             />
//           </div> <br />
//           <div>
//             <label htmlFor="content"></label>
//             <textarea 
//               type="text" 
//               id="content" 
//               name="content" 
//               className="writeInput writeText"
//               value={content} 
//               onChange={e => setContent(e.target.value)}
//             />
//           </div> <br />
//           <div><input className="writeSubmit" type="submit" value="Update Blog" /></div>
//         </form>
//       </div>
//     )
//   } else {
//     return (
//       <h3 style={{fontFamily: 'Aboreto', color: '#b43a3a', lineHeight : 10, padding: 20}}>Please log in to access this page</h3>
//     )
//   }
// }

// export default EditBlog
