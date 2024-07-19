// slices/feedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feeds: [
    { id: '1', content: 'Feed from Influencer 1', influencerId: '1' },
    { id: '2', content: 'Feed from Influencer 2', influencerId: '2' },
    { id: '3', content: 'Feed from Influencer 3', influencerId: '3' }
  ],
  selectedPlatforms: ['facebook', 'instagram', 'twitter', 'yahoo'],
  theme:'light'
};

const feedSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    setSelectedPlatforms: (state, action) => {
      state.selectedPlatforms = action.payload;
    },
    setTheme:(state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { setSelectedPlatforms, setTheme } = feedSlice.actions;
export default feedSlice.reducer;
