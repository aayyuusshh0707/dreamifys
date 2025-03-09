import React from "react";
import { Box, Typography, Button, Container, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  "How good is the placement record?",
  "How will I benefit from industry mentors?",
  "Which stack will I be eligible for?",
  "Where do Coding Ninjas alumni currently work?",
  "How long do I get to doubt resolve?",
  "Do I need a computer science degree to apply?",
  "Do I have to excel in DSA for companies hiring?",
  "Where do fellow alumni take jobs?",
  "What is the average salary hike after completing the program?",
  "How many alumni get return on investment and how soon will I know?",
  "Who can I ask regarding placements?",
  "Do you provide job guarantees?"
];

function FAQSection() {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" py={4}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Frequently Asked Questions
        </Typography>

        {faqs.map((question, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" >
                {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur nec erat vel leo efficitur tempus.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Grid container spacing={2} justifyContent="center" mt={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Button  variant="outlined" fullWidth>Payment options</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button sx={{
              backgroundColor: "#E64A19",
            }} variant="contained" fullWidth>Book a free webinar</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default FAQSection;
