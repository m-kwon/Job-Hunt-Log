import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  applications: [],
};

const jobApplicationsSlice = createSlice({
  name: 'jobApplications',
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.applications.push(action.payload);
    },
    removeApplication: (state, action) => {
      state.applications = state.applications.filter(application => application.id !== action.payload);
    },
    updateApplication: (state, action) => {
      const { id, updatedData } = action.payload;
      const applicationIndex = state.applications.findIndex(application => application.id === id);

      if (applicationIndex !== -1) {
        state.applications[applicationIndex] = { ...state.applications[applicationIndex], ...updatedData };
      }
    },
  },
});

export const { addApplication, removeApplication, updateApplication } = jobApplicationsSlice.actions;

export default jobApplicationsSlice.reducer;