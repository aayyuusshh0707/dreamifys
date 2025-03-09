import React from 'react'
import Coursedetails from '../Coursedetails';
import video from '../../../../assets/courses/videoeditor.png';

export default function Videoeditor() {

  const careerOptions = [
    "Video Editor", "Film Editor", "Post-Production Specialist",
    "Motion Graphics Designer", "VFX Artist", "Content Creator",
    "Multimedia Producer", "Broadcast Editor"
  ];

  const courseContent = [
    "Video Editing Basics", "Cutting & Transitions", "Color Correction & Grading",
    "Motion Graphics", "Sound Editing & Mixing", "Visual Effects (VFX)",
    "Storytelling & Narrative Editing", "Rendering & Exporting"
  ];

  const softwareCovered = [
    "Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve",
    "Adobe After Effects", "Avid Media Composer", "Audition",
    "Cinema 4D", "Blender (Basic VFX)"
  ];

  return (
    <>
      <Coursedetails
        Course="VIDEO EDITING"
        details="Master video editing with cutting, transitions, color correction, VFX, and sound design to create professional-quality videos for films, media, and digital platforms."
        img={<img style={{ borderRadius: "10px" }} src={video} alt="Video Editing" />}
        coursename="VIDEO EDITING"
        courseDescription="Video editing is the process of manipulating and enhancing video footage to create compelling visual stories. It involves cutting, transitions, color correction, visual effects (VFX), motion graphics, and sound editing. Professionals use industry-standard software like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve to refine videos for films, TV, social media, and digital platforms. Video editors ensure smooth storytelling, pacing, and visual consistency while optimizing output for different formats. The field continues to evolve with AI tools, 3D animation, and advanced VFX techniques, making video editing a crucial skill in the media industry."
        listone={careerOptions}
        listtwo={courseContent}
        listthree={softwareCovered}
      />
    </>
  )
}
