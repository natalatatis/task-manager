import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Box,
  Typography,
  Checkbox,
  FormGroup,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

//current date
function App() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //adds a new task
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  //deletes the task
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

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

        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <TextField
            label="New Task"
            variant="outlined"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Add
          </Button>
        </Box>

        <FormGroup>
          {tasks.map((task, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
                border: "1px solid #ddd",
                borderRadius: 1,
                padding: "8px",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={task || "Unnamed Task"}
              />
              <IconButton
                color="secondary"
                onClick={() => handleDeleteTask(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </FormGroup>
      </Box>
    </Box>
  );
}

export default App;
