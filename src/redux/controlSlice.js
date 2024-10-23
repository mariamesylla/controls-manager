import { createSlice } from '@reduxjs/toolkit';

// Load initial state from local storage
const loadControlsFromLocalStorage = () => {
  const storedControls = localStorage.getItem('controls');
  return storedControls ? JSON.parse(storedControls) : [];
};

const controlSlice = createSlice({
  name: 'controls',
  initialState: {
    controlList: loadControlsFromLocalStorage(), // Load from local storage
  },
  reducers: {
    addControl: (state, action) => {
      state.controlList.push(action.payload);
      localStorage.setItem('controls', JSON.stringify(state.controlList)); // Save to local storage
    },
    deleteControl: (state, action) => {
      state.controlList = state.controlList.filter(control => control.id !== action.payload);
      localStorage.setItem('controls', JSON.stringify(state.controlList)); // Update local storage
    },
    loadControls: (state, action) => {
      state.controlList = action.payload; // Load controls from local storage
    },
    updateControl: (state, action) => {
      const { id, updatedControl } = action.payload;
      const index = state.controlList.findIndex(control => control.id === id);
      if (index !== -1) {
        state.controlList[index] = updatedControl;
      }
    },
  },
});

export const { addControl, deleteControl, loadControls, updateControl } = controlSlice.actions;

export default controlSlice.reducer;
