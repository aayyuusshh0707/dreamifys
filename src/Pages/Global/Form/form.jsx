import React from 'react'
import { Grid, Typography, TextField, Button } from '@mui/material'

export default function form() {
  return (
    <div>
      <Grid size={{ xs: 12, md: 5 }} sx={{ backgroundColor: "#fff", color: "#000", p: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Book a <span style={{ color: "#ff5722" }}>free live webinar</span> to know more
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
