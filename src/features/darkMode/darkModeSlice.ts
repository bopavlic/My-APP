import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: true,
  reducers: {
    handleDarkModeOn(state) {
      return (state = true);
    },
    handleDarkModeOff(state) {
      return (state = false);
    },
  },
});

export const { handleDarkModeOn, handleDarkModeOff } = darkModeSlice.actions;
export default darkModeSlice.reducer;
