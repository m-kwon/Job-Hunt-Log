import { configureStore } from '@reduxjs/toolkit';
import jobApplicationsReducer from './slices/jobApplicationsSlice';

const store = configureStore({
  reducer: {
    jobApplications: jobApplicationsReducer,
  },
});

export default store;