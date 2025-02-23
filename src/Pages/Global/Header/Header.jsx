import React from 'react';
import Grid from "@mui/material/Grid";
import { Typography, Box, Container } from "@mui/material";
import Wave from '../../../assets/Header/wave.png';
import CustomButton from '../Button/Button';

export default function Header({ title, subtitle, imageSection }) {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", backgroundColor: "#121212", color: "#fff" }}>
      <Container sx={{ paddingBottom: "100px" }}>
        <Grid container spacing={5} alignItems="center" justifyContent="center">

          {/* Info Section */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {subtitle}
            </Typography>
            <Box mt={2} display="flex" gap={2}>
              <CustomButton text="View Courses" />
              <CustomButton text="Book Demo" />
            </Box>
          </Grid>
          
          {/* Image Section (Dynamically Passed via Props) */}
          <Grid item xs={12} md={5} my={6}>
            {imageSection}
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
  );
}
