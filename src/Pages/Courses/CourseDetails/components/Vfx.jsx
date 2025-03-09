import React from 'react'
import Coursedetails from '../Coursedetails';
import vfx from '../../../../assets/courses/vfx.jpg';

export default function Vfx() {

  const careerOptions = [
    "VFX Artist", "Compositor", "Motion Graphics Designer",
    "3D Animator", "Rotoscoping Artist", "Matchmove Artist",
    "CGI Specialist", "Visual Effects Supervisor"
  ];

  const courseContent = [
    "Compositing & Motion Tracking", "Rotoscoping & Keying", "3D Integration",
    "Particle Effects", "Digital Matte Painting", "Chroma Keying",
    "Lighting & Rendering", "Simulation Effects", "Post-Production Techniques"
  ];

  const softwareCovered = [
    "Adobe After Effects", "Nuke", "Houdini",
    "Cinema 4D", "Maya", "Blender",
    "3ds Max", "Mocha Pro"
  ];

  return (
    <>
      <Coursedetails
        Course="VFX"
        details="Master VFX techniques like compositing, motion tracking, CGI, and special effects to create stunning visuals for films, games, and digital media."
        img={<img style={{ borderRadius: "10px" }} src={vfx} alt="VFX" />}
        coursename="VFX"
        courseDescription="Visual Effects (VFX) is the art of enhancing live-action footage with digital effects, CGI, and motion graphics. It includes compositing, 3D integration, rotoscoping, and particle simulations. VFX artists use industry-standard software like After Effects, Nuke, and Houdini to create immersive visual experiences for films, games, and digital media. With evolving technologies like AI-driven effects, real-time rendering, and virtual production, VFX continues to shape the future of entertainment and storytelling."
        listone={careerOptions}
        listtwo={courseContent}
        listthree={softwareCovered}
      />
    </>
  )
}
