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
  Select,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";

//current date
function App() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //Task categories and state management
  const categories = ["Health", "Studies", "Work", "Fun", "Personal"];
  const [tasks, setTasks] = useState({});
  const [newTask, setNewTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filterCategory, setFilterCategory] = useState("");

  //adds a new task to selected category
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [selectedCategory]: [
          ...(prevTasks[selectedCategory] || []),
          newTask.trim(),
        ],
      }));
      setNewTask("");
    }
  };

  //deletes the task
  const handleDeleteTask = (category, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((_, i) => i !== index),
    }));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#36aa6d",
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
        {/*Title and date display */}
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {currentDate}
        </Typography>

        {/*Task input, category selecter and add button */}

        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <TextField
            label="New Task"
            variant="outlined"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTask();
              }
            }}
          />
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            sx={{ minWidth: 120 }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5dceff",
              color: "#fff",
              "&:hover": { backgroundColor: "#4cb3e8" },
            }}
            onClick={handleAddTask}
          >
            Add
          </Button>
        </Box>

        {/*Filter Dropdown*/}
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <FilterListIcon sx={{ color: "gray" }} />
          <Typography variant="body1">Filter:</Typography>
          <Select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            sx={{ minWidth: 120, mb: 2 }}
          >
            <MenuItem value="">All</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/*Displays the tasks grouped by categories */}
        {categories
          .filter(
            (category) => filterCategory === "" || filterCategory === category
          )
          .map((category) => (
            <Box key={category} sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {category}
              </Typography>
              <FormGroup>
                {(tasks[category] || []).map((task, index) => (
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
                    <FormControlLabel control={<Checkbox />} label={task} />
                    <IconButton
                      color="secondary"
                      onClick={() => handleDeleteTask(category, index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </FormGroup>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
export default App;
