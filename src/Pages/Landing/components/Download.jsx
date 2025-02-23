import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

function Download() {
  return (
    <Container>
    <Box sx={{ backgroundColor: "#121212", py: 4, borderRadius: 4, textAlign: "center" }}>
      
        {/* Heading */}
        <Typography variant="h4" color="white" fontWeight="bold" py={4}>
          Get more insights on how Crio can help you crack a full stack or backend role in top tech companies
        </Typography>

        {/* Buttons Section */}
        <Grid2 container spacing={2} justifyContent="center" pt={4}>
          <Grid2>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white", px: 3 }}>
              Download Career Handbook
            </Button>
          </Grid2>
          <Grid2>
            <Button variant="contained" sx={{ backgroundColor: "#ff5722", px: 3 }}>
              Download Placement Stats →
            </Button>
          </Grid2>
        </Grid2>
      
    </Box>
    </Container>
  );
}

export default Download;
