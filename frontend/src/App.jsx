import React from 'react'
import Home from './home/home'
import { Navigate, Route, Routes } from 'react-router-dom'

import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import { useAuth } from './context/AuthProvider'










const App = () => {
  const [authUser, setauthUser] = useAuth();
    console.log(authUser)
  return (
  <>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
   
<Route
  path="/course"
  element={authUser ? <Courses /> : <Navigate to="/signup" />}
/>      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

     
    </Routes>

    

      
    </>
  )
}

export default App
