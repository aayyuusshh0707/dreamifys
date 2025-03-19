import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Button from "../../Global/Button/Button";
import CustumButton from "../../Global/Button/Button";
import { useNavigate } from "react-router-dom";
import video from '../../../assets/video/Intro.mp4'

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100%",
        backgroundColor: "#121212",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 2,
        pt: 5,

      }}
    >
      <Typography variant="body2" sx={{
        background: "linear-gradient(45deg,rgb(255, 0, 212),rgb(255, 102, 0),rgb(145, 255, 0))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bold",
        mb: 1,
      }}>

        Restricted by opportunities?
      </Typography>
      <Typography width={{ xs: "100%", md: "45%" }} variant="h4" sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "2rem", md: "3.2rem" } }}>
        Get the tech career you deserve.
      </Typography>
      <Typography variant="body1" sx={{ opacity: 0.8, mb: 3 }}>
        Structured courses that get you there faster with confidence.
      </Typography>
      <Box >
        <CustumButton text="Explore Courses" onClick={() => navigate("/courses")} />
      </Box>
      <Box

        component="video"
        autoPlay
        muted
        controls
        
        width="90%"
        maxWidth="800px"
        sx={{ mt: 3, borderRadius: "10px" }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
    </Box>
  );
};

export default Herosection;
