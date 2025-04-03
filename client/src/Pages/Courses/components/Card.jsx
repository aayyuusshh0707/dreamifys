import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import Animation from '../../../assets/courses/Animation.jpg';
import Vfx from '../../../assets/courses/vfx.jpg';
import film from '../../../assets/courses/filmmaking.jpg';
import Graphics from '../../../assets/courses/graphics.png';
import web from '../../../assets/courses/Development.png';
import uiux from '../../../assets/courses/uiux.jpg';
import video from '../../../assets/courses/videoeditor.png';
import digital from '../../../assets/courses/digitalmaketing.webp';


const offerings = [
  {
    title: "Animation", description: "The Advanced Program in 3D Animation is an immersive and comprehensive training course designed to equip participants.", image: `${Animation}`, path: "/animation"
  },
  { title: "VFX", image: `${Vfx}`, path: "/vfx", description: "The Advanced Program in VFX trains participant and CGI effects, preparing them for careers in films, television, gaming, and digital media. " },
  { title: "Film Making", image: `${film}`, path: "/film-making", description: "The Advanced Filmmaking Program teaches scriptwriting, cinematography, directing, and editing to create compelling visual stories." },
  { title: "Graphics", image: `${Graphics}`, path: "/graphics", description: "The Advanced Graphic Design Program covers branding, typography, and digital design to create stunning visuals for print, web, and media." },
  { title: "Web Development", image: `${web}`, path: "/web-development", description: "The Advanced Web Development Program covers front-end and back-end technologies to build dynamic, responsive websites." },
  { title: "Video Editing", image: `${video}`, path: "/video-editing", description: "The Advanced Video Editing Program teaches cutting, transitions, effects, and color correction to create professional-quality videos for films." },
  { title: "UI/UX", image: `${uiux}`, path: "/ui-ux", description: "The Advanced UI/UX Design Program covers user research, and design principles to create intuitive and engaging digital experiences." },
  { title: "Digital Marketing", image: `${digital}`, path: "/digital-marketing", description: "The Advanced Digital Marketing Program covers SEO, social media, content marketing, and analytics to drive online growth and engagement." },
  // { title: "Digital Marketing", image: `${digital}`, path: "/digital-marketing", description: "The Advanced Digital Marketing Program covers SEO, social media, content marketing, and analytics to drive online growth and engagement." }
];

function Offerings() {
  const navigate = useNavigate(); 

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 4 }}>
      <Typography
        variant="h4"
        fontWeight={900}
        sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, my: { xs: 2, md: 4 } }}
        gutterBottom
      >
        OUR OFFERINGS
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {offerings.map((offering, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>

            <Card
              sx={{
                backgroundColor: "#121212",
                borderRadius: "20px", 
                overflow: "hidden",
                textAlign: "center",
                border: "3px solid orange",
                position: "relative",
              }}
            >
              {/* Image with Gradient Overlay */}
              <div style={{ position: "relative" }}>
                <img
                  src={offering.image}
                  style={{

                    height: "250px",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  alt={offering.title}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9))",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "20px",
                    color: "white",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff5722" }}>
                    {offering.title.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" mt={1}>
                    {offering.description}
                  </Typography>
                </div>
              </div>

              {/* Button Section */}
              <CardContent sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: "90%",
                    borderRadius: "25px",
                    backgroundColor: "#ff5722",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "10px",
                  }}
                  onClick={() => navigate(offering.path)}
                >
                  View Program
                </Button>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Offerings;
