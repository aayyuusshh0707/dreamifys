import React from 'react';
import Coursedetails from '../Coursedetails';
import dev from '../../../../assets/courses/Development.png';

export default function Webdev() {

  const careerOptions = [
    "Graphic Designer", "Web Designer", "Front-end Developer",
    "E-commerce Developer", "Interactive Media Developer", "Content Developer",
    "Art Director", "Creative Technologist"
  ];

  const courseContent = [
    "Graphic Design", "HTML", "CSS",
    "Javascript", "Frameworks And Libraries", "UI Components",
    "Responsive Design", "Performance Optimization", "Cross-Browser Compatibility",
    "Accessibility", "Version Control"
  ];

  const softwareCovered = [
    "Adobe Photoshop", "Adobe Illustrator", "CorelDraw",
    "Indesign", "HTML", "CSS",
    "Javascript", "Bootstrap", "React / Jquery",
    "Material UI (React Library)"
  ];

  return (
    <>
      <Coursedetails
        Course="WEB DEVELOPMENT"
        details="Master web development with HTML, CSS, JavaScript, React, Node.js, databases, APIs, security, performance, and deployment for modern, scalable applications."
        img={<img src={dev} alt="Web Development" />}
        coursename="WEB DEVELOPMENT"
        courseDescription="Web development is the process of designing, building, and maintaining websites and web applications. It involves front-end development (HTML, CSS, JavaScript, React) for user interfaces and back-end development (Node.js, databases, APIs) for server-side logic. Web developers ensure responsiveness, security, performance optimization, and seamless user experiences. They use frameworks, libraries, and tools to streamline development, enhance functionality, and deploy scalable applications. Web development also includes testing, debugging, SEO optimization, and hosting. With evolving technologies like cloud computing, AI, and serverless architecture, web development continues to advance, enabling businesses and individuals to create powerful, dynamic, and engaging online platforms."
        listone={careerOptions}
        listtwo={courseContent}
        listthree={softwareCovered}
      />
    </>
  );
}
