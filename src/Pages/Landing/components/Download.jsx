import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../../Pages/Global/aceternity/ui/text-reveal-card";

function Download() {
  return (

    <div className="flex items-center justify-center ">
      <TextRevealCard
        text="You want to learn ......"
        revealText="We know how to teach."
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
         Dreamifys can help you crack a full stack or backend role in top tech companies
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

export default Download;