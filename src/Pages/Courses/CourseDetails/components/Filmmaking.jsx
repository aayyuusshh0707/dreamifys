import React from 'react'
import Coursedetails from '../Coursedetails';
import filmmaking from '../../../../assets/courses/filmmaking.jpg';

export default function Filmmaking() {

  const careerOptions = [
    "Film Director", "Cinematographer", "Screenwriter",
    "Film Editor", "Production Designer", "Sound Designer",
    "Producer", "Documentary Filmmaker"
  ];

  const courseContent = [
    "Scriptwriting & Storyboarding", "Cinematography", "Lighting Techniques",
    "Directing & Acting", "Sound Recording & Design", "Film Editing",
    "Post-Production & VFX", "Documentary & Short Film Production",
    "Film Distribution & Marketing"
  ];

  const softwareCovered = [
    "Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve",
    "Avid Media Composer", "Adobe After Effects", "Logic Pro",
    "Pro Tools", "Cinema 4D"
  ];

  return (
    <>
      <Coursedetails
        Course="FILM MAKING"
        details="Learn scriptwriting, cinematography, directing, editing, and sound design to create professional films and digital media content."
        img={<img style={{ borderRadius: "10px" }} src={filmmaking} alt="Film Making" />}
        coursename="FILM MAKING"
        courseDescription="Film Making is the art of visual storytelling, encompassing scriptwriting, cinematography, directing, and editing. Filmmakers use lighting, camera work, sound design, and post-production techniques to create engaging narratives for films, TV, and digital platforms. With industry-standard software like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve, professionals shape compelling visual experiences. The field continues to evolve with digital filmmaking, virtual production, and AI-driven editing, revolutionizing the way stories are told."
        listone={careerOptions}
        listtwo={courseContent}
        listthree={softwareCovered}
      />
    </>
  )
}
