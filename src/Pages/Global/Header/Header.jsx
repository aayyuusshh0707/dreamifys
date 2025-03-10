// import React from 'react';
// import Grid from "@mui/material/Grid";
// import { Typography, Box, Container } from "@mui/material";
// import Wave from '../../../assets/Header/wave.png';
// import CustomButton from '../Button/Button';

// export default function Header({ title, subtitle, imageSection }) {
//   return (
//     <Box sx={{ position: "relative", minHeight: "100vh", backgroundColor: "#121212", color: "#fff", justifyContent: "center", alignContent: "center", display: "flex", flexDirection: "column" ,pt:{xs:7,md:0}}}>
//       <Container sx={{ paddingBottom: "100px" }}>
//         <Grid container spacing={ 4 } alignItems="center" justifyContent="center" flexDirection={{ xs: "column-reverse", md: "row" }}>



//           {/* Image Section (Dynamically Passed via Props) */}
//           <Grid item xs={12} md={5} >
//             {imageSection}
//           </Grid>

//           {/* Info Section */}
//           <Grid item xs={12} md={5}>
//             <Typography variant="h4" fontWeight={900} sx={{ color: "#ff5722"  , fontSize: { xs: "2rem", md: "3.3rem" }}} gutterBottom>
//               {title}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               {subtitle}
//             </Typography>
//             <Box mt={2} display="flex" gap={2}>
             
//             </Box>
//           </Grid>

//         </Grid>
//       </Container>

//       {/* Wave Image Stays at Bottom */}
//       <Box
//         component="img"
//         src={Wave}
//         alt="Wave Banner"
//         sx={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: "100%",
//           height: "auto"
//         }}
//       />
//     </Box>
//   );
// }
import React from 'react';
import Grid from "@mui/material/Grid";
import { Typography, Box, Container } from "@mui/material";
import Wave from '../../../assets/Header/wave.png';
import CustomButton from '../Button/Button';

export default function Header({ title, subtitle, imageSection }) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        pt: { xs: 7, md: 0 },
        overflow: "hidden",
      }}
    >
      <Container sx={{ pb: 10 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          {/* Image Section */}
          <Grid sx={{height: {xs: '400px', md: '450px'}}} item xs={12} md={6} display="flex" justifyContent="center">
            {imageSection}
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h4"
              fontWeight={900}
              sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" } }}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {subtitle}
            </Typography>
            <Box mt={2} display="flex" gap={2} justifyContent={{ xs: "center", md: "flex-start" }}>
              <CustomButton>Learn More</CustomButton>
              <CustomButton variant="outlined">Get Started</CustomButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Wave Image at Bottom */}
      <Box
        component="img"
        src={Wave}
        alt="Wave Banner"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}
