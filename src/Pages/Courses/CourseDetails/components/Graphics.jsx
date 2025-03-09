import React from 'react'
import Coursedetails from '../Coursedetails';
import graphics from '../../../../assets/courses/graphics.png';

export default function Graphics() {

  const careerOptions = [
    "Graphic Designer", "UI/UX Designer", "Brand Identity Designer",
    "Illustrator", "Motion Graphics Designer", "Art Director",
    "Creative Director", "Marketing Designer"
  ];

  const courseContent = [
    "Fundamentals of Design", "Typography & Color Theory", "Branding & Logo Design",
    "Digital & Print Media", "Illustration & Vector Art", "Motion Graphics",
    "UI/UX Design Principles", "Layout & Composition", "Design for Social Media"
  ];

  const softwareCovered = [
    "Adobe Photoshop", "Adobe Illustrator", "CorelDRAW",
    "Adobe InDesign", "Figma", "Adobe After Effects",
    "Canva", "Sketch"
  ];

  return (
    <>
      <Coursedetails
        Course="GRAPHIC DESIGN"
        details="Learn branding, typography, illustration, and digital design to create stunning visuals for print, web, and digital media."
        img={<img style={{ borderRadius: "10px" }} src={graphics} alt="Graphic Design" />}
        coursename="GRAPHIC DESIGN"
        courseDescription="Graphic Design is the art of visual communication, combining creativity and technology to create stunning visuals. It involves branding, typography, layout, and digital illustration for print and digital platforms. Designers use tools like Adobe Photoshop, Illustrator, and InDesign to craft compelling designs for marketing, UI/UX, and media. With evolving trends in motion graphics, AI-generated design, and interactive media, graphic design continues to shape the digital world."
        listone={careerOptions}
        listtwo={courseContent}
        listthree={softwareCovered}
      />
    </>
  )
}
