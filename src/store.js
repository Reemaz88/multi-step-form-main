import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice'; // Import form slice

const store = configureStore({
  reducer: {
    form: formReducer, // Add the form slice to the store
  },
});

export default store;
