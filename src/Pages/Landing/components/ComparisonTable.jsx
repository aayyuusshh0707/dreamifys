import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Container } from "@mui/material";

const data = [
  { feature: "Real work experience", video: "✖", bootcamp: "✖", crio: "✔" },
  { feature: "True, project-based learning", video: "✖", bootcamp: "✖", crio: "✔" },
  { feature: "Live sessions & mentorship", video: "✖", bootcamp: "✔", crio: "✔" },
  { feature: "Job-ready portfolio", video: "✖", bootcamp: "✖", crio: "✔" },
  { feature: "Externship with top companies", video: "✖", bootcamp: "✖", crio: "✔" },
  { feature: "Career guidance", video: "✖", bootcamp: "✔", crio: "✔" },
  { feature: "Assured Referrals", video: "✖", bootcamp: "✖", crio: "✔" },
];

const ComparisonTable = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
        <Container>
      <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow sx={{ backgroundColor: "#3FD1AE" }}>
              <TableCell sx={{ fontWeight: "bold", color: "white" }}>Feature</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", color: "white" }}>Video Courses</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", color: "white" }}>Bootcamps</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold", color: "white", backgroundColor: "#FFEFAA" }}>Dreamifys</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? "#F7FAF9" : "white" }}>
                <TableCell>{row.feature}</TableCell>
                <TableCell align="center" sx={{ color: row.video === "✔" ? "green" : "red" }}>{row.video}</TableCell>
                <TableCell align="center" sx={{ color: row.bootcamp === "✔" ? "green" : "red" }}>{row.bootcamp}</TableCell>
                <TableCell align="center" sx={{ color: row.crio === "✔" ? "green" : "red", backgroundColor: "#FFEFAA" }}>
                  {row.crio}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </Box>
  );
};

export default ComparisonTable;
