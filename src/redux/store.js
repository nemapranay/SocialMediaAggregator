// store.js
import { configureStore } from '@reduxjs/toolkit';
import influencerReducer from './slices/influencerSlice';
import feedReducer from './slices/feedSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    influencers: influencerReducer,
    feeds: feedReducer,
    users:userReducer
  }
});

export default store;
