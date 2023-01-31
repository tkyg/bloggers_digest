import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './components/context/User'
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Profile from './components/profile/Profile'
import Blogs from './components/blog/Blogs'
import EditBlog from './components/blog/EditBlog'
import BlogDetails from './components/blog/BlogDetails'
import ReviewForm from './components/review/ReviewForm'
import './App.css'



function App(props){

  return (
    <div className='App'>
      <Router>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route path="/blogs" element={ <Blogs />} />
          <Route path="/blogs/:id/edit" element={<EditBlog />}/>
          <Route path="/blogs/:id" element={ <BlogDetails />} />
          <Route path="/reviews" element={ <ReviewForm />} />
        </Routes>
      </UserProvider>
      </Router>
    </div>
  )
}

export default App
