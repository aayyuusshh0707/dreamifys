import React from 'react'
import { Grid, Typography, TextField, Button } from '@mui/material'

export default function Form() {
  return (
    <div>
      <Grid sx={{ maxWidth: 400,  backgroundColor: "#fff", color: "#000", p: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Book a <span style={{ color: "#ff5722" }}>Call back now</span> to know more
        </Typography>
        <TextField fullWidth label="Name" variant="outlined" margin="normal" required />
        <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" required />
        <TextField fullWidth label="Phone Number" type="tel" variant="outlined" margin="normal" required />
        <Button fullWidth variant="contained" sx={{ backgroundColor: "#ff5722", mt: 2 }}>
          Continue booking webinar →
        </Button>
      
      </Grid>
    </div>
  )
}
// import React from "react";
// import { Grid, Typography, TextField, Button, Box } from "@mui/material";

// export default function Form() {
//   return (
//     <Box
//       sx={{
//         maxWidth: 400,
//         mx: "auto",
//         p: 4,
//         backgroundColor: "#fff",
//         borderRadius: 3,
//         boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
//         textAlign: "center",
//       }}
//     >
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         Book a <span style={{ color: "#ff5722" }}>Call Back</span> Now!
//       </Typography>
//       <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
//         Fill in your details and we’ll get back to you shortly.
//       </Typography>

//       <TextField
//         fullWidth
//         label="Name"
//         variant="outlined"
//         margin="normal"
//         required
//         sx={{ borderRadius: 2 }}
//       />
//       <TextField
//         fullWidth
//         label="Email"
//         type="email"
//         variant="outlined"
//         margin="normal"
//         required
//         sx={{ borderRadius: 2 }}
//       />
//       <TextField
//         fullWidth
//         label="Phone Number"
//         type="tel"
//         variant="outlined"
//         margin="normal"
//         required
//         sx={{ borderRadius: 2 }}
//       />

//       <Button
//         fullWidth
//         variant="contained"
//         sx={{
//           mt: 3,
//           py: 1.5,
//           backgroundColor: "#ff5722",
//           fontWeight: "bold",
//           fontSize: "1rem",
//           "&:hover": { backgroundColor: "#e64a19" },
//         }}
//       >
//         Continue Booking Webinar →
//       </Button>
//     </Box>
//   );
// }
