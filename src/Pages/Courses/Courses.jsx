import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Global/Header/Header';
import Form from '../Global/Form/form';
import Offerings from './components/Card';
import Testimonials from './components/Testimonials';
import { Container } from '@mui/material';
import Admissionssection from './components/AdmissionsSection';

export default function Courses() {
  return (
    <>
      <Outlet />
      <Header
        title="COURSES"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta"
        imageSection={<Form />}
      />
      <Offerings />
      <Testimonials />
      <Admissionssection />
    </>
  );
}
