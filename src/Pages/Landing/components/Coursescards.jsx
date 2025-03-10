import React from 'react'
import { CardBody, CardContainer, CardItem } from "../../Global/aceternity/ui/3d-card";
import Animation from '../../../assets/courses/Animation.jpg';
import Vfx from '../../../assets/courses/vfx.jpg';
import film from '../../../assets/courses/filmmaking.jpg';
import Graphics from '../../../assets/courses/graphics.png';
import web from '../../../assets/courses/Development.png';
import uiux from '../../../assets/courses/uiux.jpg';
import video from '../../../assets/courses/videoeditor.png';
import digital from '../../../assets/courses/digitalmaketing.webp';
import { Typography, Grid, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Coursescards() {

  const navigate = useNavigate();


  const offerings = [

    { title: "VFX", image: `${Vfx}`, path: "/vfx", description: "The Advanced Program in VFX trains participant and CGI effects, preparing them for careers in films, television, gaming, and digital media. " },
    { title: "Film Making", image: `${film}`, path: "/film-making", description: "The Advanced Filmmaking Program teaches scriptwriting, cinematography, directing, and editing to create compelling visual stories." },
    { title: "Graphics", image: `${Graphics}`, path: "/graphics", description: "The Advanced Graphic Design Program covers branding, typography, and digital design to create stunning visuals for print, web, and media." },
    { title: "Video Editing", image: `${video}`, path: "/video-editing", description: "The Advanced Video Editing Program teaches cutting, transitions, effects, and color correction to create professional-quality videos for films." },
    {
      title: "Animation",
      image: `${Animation}`,
      path: "/animation",
      description: "The Advanced Animation Program covers motion graphics, character animation, and visual effects to bring creative ideas to life with industry-standard tools."
    },

    {
      title: "UI/UX Design",
      image: `${uiux}`,
      path: "/ui-ux",
      description: "The Advanced UI/UX Design Program covers user research, wireframing, prototyping, and visual design to create engaging and user-friendly digital experiences."
    }

  ];
  return (
    <>
      <Box sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, mx: { xs: 2, md: 4 }, my: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, my: { xs: 2, md: 4 } }}
          gutterBottom
        >
          OUR COURSES
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 3 }}>
          {offerings.map((offering, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>

              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className=" text-3xl font-bold  dark:text-white">
                    {offering.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {offering.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={offering.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail" />
                  </CardItem>

                  <button as="button" onClick={() => navigate(offering.path)}
                    translateZ="60"
                    className="bg-orange-500   w-full  px-4 py-2 rounded-lg text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 cursor-pointer">

                    View Details
                  </button>
                </CardBody>
              </CardContainer>

            </Grid>
          ))}


        </Box>

      </Box>
    </>
  )
}
