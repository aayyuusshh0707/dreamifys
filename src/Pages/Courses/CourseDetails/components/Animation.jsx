import React from 'react'
import Coursedetails from '../Coursedetails';
import animation from '../../../../assets/courses/Animation.jpg';

export default function Animation() {

  const careerOptions = [
    "3D Animator", "Character Animator", "Storyboard Artist",
    "Motion Graphics Designer", "Visual Effects Artist", "Game Animator",
    "Rigging Artist", "Animation Director"
  ];

  const courseContent = [
    "Principles of Animation", "2D & 3D Animation", "Character Design & Rigging",
    "Storyboarding", "Motion Graphics", "Visual Effects (VFX)",
    "Lighting & Rendering", "Compositing", "Post-Production Techniques"
  ];

  const softwareCovered = [
    "Autodesk Maya", "Blender", "Adobe After Effects",
    "Toon Boom Harmony", "Cinema 4D", "3ds Max",
    "ZBrush", "Adobe Animate"
  ];

  return (
    <>
      <Coursedetails
        Course="ANIMATION"
        details="Learn 2D & 3D animation, character design, motion graphics, and VFX to create stunning visuals for films, games, and digital media."
        img={<img style={{ borderRadius: "10px" }} src={animation} alt="Animation" />}
        coursename="ANIMATION"
        courseDescription="Animation is the art of bringing characters, objects, and environments to life through motion. It includes 2D and 3D animation, storyboarding, rigging, motion graphics, and visual effects. Animators use industry-standard software like Autodesk Maya, Blender, and Adobe After Effects to create engaging content for films, games, advertisements, and digital media. With advancements in CGI, real-time animation, and AI-driven techniques, the field of animation continues to evolve, shaping the future of entertainment and storytelling."
        listone={careerOptions}
        listtwo={courseContent}
        listthree={softwareCovered}
      />
    </>
  )
}
