import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  LinearProgress,
  Typography,
  Checkbox,
  FormGroup,
} from "@mui/material";

function App() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5198df",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {currentDate}
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Task"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Task "
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Task"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Task"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Task"
          />
        </FormGroup>
      </Box>
    </Box>
  );
}

export default App;
