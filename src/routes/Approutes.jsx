import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Main Pages
import Landing from '../Pages/Landing/Landing';
import About from '../Pages/About/About';
import Jobs from '../Pages/Jobs/Jobs';
import Contact from '../Pages/Contact/Contact';
import Courses from '../Pages/Courses/Courses';
import Singin from '../Pages/Sign/Signin';


// Course Details Components
import Animation from '../Pages/Courses/CourseDetails/components/Animation';
import VFX from '../Pages/Courses/CourseDetails/components/Vfx';
import Filmmaking from '../Pages/Courses/CourseDetails/components/Filmmaking';
import Graphics from '../Pages/Courses/CourseDetails/components/Graphics';
import Webdev from '../Pages/Courses/CourseDetails/components/Webdev';
import Videoeditor from '../Pages/Courses/CourseDetails/components/Videoeditor';
import Uiux from '../Pages/Courses/CourseDetails/components/Uiux';
import Digitalmarketing from '../Pages/Courses/CourseDetails/components/Digitalmarketing';

export default function Approutes() {
  return (

    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/signin" element={<Singin />} />


      {/* Courses & Nested Course Routes */}

      <Route path="/animation" element={<Animation />} />
      <Route path="/vfx" element={<VFX />} />
      <Route path="/film-making" element={<Filmmaking />} />
      <Route path="/graphics" element={<Graphics />} />
      <Route path="/web-development" element={<Webdev />} />
      <Route path="/video-editing" element={<Videoeditor />} />
      <Route path="/ui-ux" element={<Uiux />} />
      <Route path="/digital-marketing" element={<Digitalmarketing />} />
    </Routes>

  );
}
