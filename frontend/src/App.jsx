import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/aboutme/About';
import Experience from './component/experience/Experience';
import Resume from './component/resume/Resume';
import LeetCodeProfile from './component/profile/LeetCodeProfile';
import MainLayout from './MainLayout';
import { AnimatePresence } from 'framer-motion';
import GeeksForGeeks from './component/profile/GeeksForGeeks';

const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
          </Route>
          <Route path="/leetcode" element={<LeetCodeProfile/>} />
          <Route path='/gfg' element={<GeeksForGeeks/>} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
};

export default App;