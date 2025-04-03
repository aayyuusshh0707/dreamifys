import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Global/Header/Header';
import Form from '../Global/Form/form';
import Offerings from './components/Card';
import Testimonials from './components/Testimonials';
import courses from '../../assets/Header/courses.png';  
import Admissionssection from './components/AdmissionsSection';

export default function Courses() {
  return (
    <>
      <Outlet />
      <Header
        title="COURSES"
        subtitle="Our company offers industry-focused courses in Full-Stack Development, Frontend, Backend, UI/UX Design, and Data Structures & Algorithms, providing hands-on learning with real-world projects to enhance career growth in technology. 🚀"
        imageSection={<img src={courses} alt="courses" />}
      />
      <Offerings />
      <Testimonials />
      <Admissionssection />
    </>
  );
}
