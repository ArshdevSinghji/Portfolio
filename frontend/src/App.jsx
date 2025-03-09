import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './component/aboutme/About'
import Navbar from './component/navbar/Navbar'
import Experience from './component/experience/Experience'
import Resume from './component/resume/Resume'
import LeetCodeProfile from './component/profile/LeetCodeProfile'
const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path='/codingstats' element={<LeetCodeProfile/>}/>
        </Routes>
    </Router>
  )
}

export default App
