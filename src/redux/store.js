import { configureStore } from '@reduxjs/toolkit';
import controlReducer from './controlSlice';

const store = configureStore({
  reducer: {
    controls: controlReducer, // Ensure the reducer is correctly registered
  },
});

export default store;
