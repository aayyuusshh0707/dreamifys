import React from 'react'
import Header from '../Global/Header/Header';
import about from '../../assets/Header/aboutus.png';


export default function About() {
  return (
    <>

      <Header title="ABOUT US" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem aliquid? Soluta" imageSection={<img src={about} alt="about" />} />

    </>
  )
}
