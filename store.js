import { configureStore } from '@reduxjs/toolkit'
// Seperates states of data
import navReducer from './slices/navSlice';

export const store = configureStore({
    // Sets up store
  reducer: {
      nav: navReducer,
  },
})