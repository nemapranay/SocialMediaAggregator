// store.js
import { configureStore } from '@reduxjs/toolkit';
import influencerReducer from './slices/influencerSlice';
import feedReducer from './slices/feedSlice';

const store = configureStore({
  reducer: {
    influencers: influencerReducer,
    feeds: feedReducer
  }
});

export default store;
