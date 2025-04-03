import React from 'react'
import Coursedetails from '../Coursedetails';
import uiux from '../../../../assets/courses/uiux.jpg';

export default function UIUX() {

  const careerOptions = [
    "UI Designer", "UX Designer", "Interaction Designer",
    "Product Designer", "UX Researcher", "Visual Designer",
    "Wireframe Specialist", "Mobile App Designer"
  ];

  const courseContent = [
    "Fundamentals of UI/UX", "User Research & Personas", "Wireframing & Prototyping",
    "Interaction Design", "Usability Testing", "Design Thinking Process",
    "Mobile & Web UI Design", "Responsive Design", "Accessibility & Inclusive Design"
  ];

  const softwareCovered = [
    "Figma", "Adobe XD", "Sketch",
    "InVision", "Axure RP", "Adobe Photoshop",
    "Adobe Illustrator", "Balsamiq"
  ];

  return (
    <>
      <Coursedetails
        Course="UI/UX DESIGN"
        details="Learn UI/UX design principles, wireframing, prototyping, and user research to create seamless digital experiences for web and mobile applications."
        img={<img style={{ borderRadius: "10px" }} src={uiux} alt="UI/UX Design" />}
        coursename="UI/UX DESIGN"
        courseDescription="UI/UX Design focuses on creating user-friendly, visually appealing digital experiences. UI (User Interface) involves designing the look and feel, while UX (User Experience) ensures seamless interaction and usability. Designers use tools like Figma, Adobe XD, and Sketch to develop wireframes, prototypes, and interactive designs. With evolving trends in AI, augmented reality, and voice interfaces, UI/UX continues to shape the future of digital products."
        listone={careerOptions}
        listtwo={courseContent}
        listthree={softwareCovered}
      />
    </>
  )
}
