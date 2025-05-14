import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const projectSlice = createSlice({
  name: "project",
  initialState: [],
  reducers: {
    // Add Project
    addProject: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
        purchased: false,
      });
    },

    // Update Purchase
    updatePurchase: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) projects[index].purchased = true;
    },

    // Delete Project
    removeProject: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) projects.splice(index, 1);
    },
  },
});

export const { addProject, removeProject, updatePurchase } =
  projectSlice.actions;

export default projectSlice.reducer;
