import React from 'react';
import Grid from "@mui/material/Grid";
import { Typography, Box, Container } from "@mui/material";
import Wave from '../../../assets/Header/wave.png';
import CustomButton from '../Button/Button';

export default function Header({ title, subtitle, imageSection }) {
  return (
    <Box sx={{ position: "relative", minHeight: "100%", backgroundColor: "#121212", color: "#fff",paddingBottom: "50px", justifyContent: "center", alignContent: "center", display: "flex", flexDirection: "column" ,pt:{xs:7,md:7}}}>
      <Container sx={{ paddingBottom: "100px" }}>
        <Grid container spacing={ 4 } alignItems="center" justifyContent="center" flexDirection={{ xs: "column-reverse", md: "row" }}>

          {/* Image Section (Dynamically Passed via Props) */}
          {/* hide in mobile */}
          <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
            {imageSection}
         
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" fontWeight={900} sx={{ color: "#ff5722"  , fontSize: { xs: "2rem", md: "3.3rem" }}} gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {subtitle}
            </Typography>
            <Box mt={2} display="flex" gap={2}>
             
            </Box>
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

 