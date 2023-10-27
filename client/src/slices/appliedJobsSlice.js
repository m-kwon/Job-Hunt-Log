import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
};

export const appliedJobsSlice = createSlice({
  name: "appliedJobs",
  initialState,
  reducers: {
  },
});
