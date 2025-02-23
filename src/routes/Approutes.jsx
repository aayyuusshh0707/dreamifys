import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import About from '../Pages/About/About';
import Courses from '../Pages/Courses/Courses';
import Jobs from '../Pages/Jobs/Jobs';
import Contact from '../Pages/Contact/Contact';

export default function Approutes() {
  return (
  
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
 
  )
}
