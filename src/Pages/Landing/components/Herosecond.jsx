import React from 'react'
import Grid from "@mui/material/Grid";
import { Typography, Box, Container } from "@mui/material";
import Wave from '../../../assets/Header/wave.png';
import CustomButton from '../../Global/Button/Button';
import Form from '../../Global/Form/form';
import { useNavigate } from "react-router-dom";

export default function Herosecond() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ position: "relative", minHeight: "100vh", backgroundColor: "#121212", color: "#fff", justifyContent: "center", alignContent: "center", display: "flex", flexDirection: "column" }}>
        <Container sx={{ paddingBottom: "100px" }}>
          <Grid container spacing={5} alignItems="center" justifyContent="center">

            {/* Info Section */}
            <Grid item xs={12} md={5}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Institute Of Animation, VFX & Film Making
              </Typography>
              <Typography variant="body1" gutterBottom>
                We have a track record of maintaining 100% job placement with every batch. Dreamifys has worked hard day in and day out to reach these notable organizations, most of which are our partner companies.
              </Typography>
              <Box mt={2} display="flex" gap={2}>
                <CustomButton text="View Courses" onClick={() => navigate("/courses")} />
                <CustomButton text="Join Now" onClick={() => navigate("/signin")} />

              </Box>
            </Grid>

            {/* Image Section (Dynamically Passed via Props) */}
            <Grid item xs={12} md={5} my={6}>
              <Form />
            </Grid>

          </Grid>
        </Container>

        {/* Wave Image Stays at Bottom */}
        <Box
          component="img"
          src={Wave}
          alt="Wave Banner"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "auto"
          }}
        />
      </Box>
    </>
  )
}
