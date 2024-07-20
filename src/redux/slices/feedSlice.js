// slices/feedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feeds: [
    { id: '1', content: 'Some facebook feed from Influencer 1', influencerId: '1' },
    { id: '2', content: 'Some instagram feed from Influencer 1', influencerId: '1' },
    { id: '3', content: 'Some twitter feed from Influencer 1', influencerId: '1' },
    { id: '4', content: 'Some yahoo feed from Influencer 1', influencerId: '1' },
    { id: '5', content: 'Feed facebook Influencer 2', influencerId: '2' },
    { id: '6', content: 'Feed instagram Influencer 2', influencerId: '2' },
    { id: '7', content: 'Feed twitter Influencer 2', influencerId: '2' },
    { id: '8', content: 'Feed yahoo Influencer 2', influencerId: '2' },
    { id: '9', content: 'Feed facebook from Influencer 3', influencerId: '3' },
    { id: '10', content: 'Feed instagram from Influencer 3', influencerId: '3' },
    { id: '11', content: 'Feed twitter from Influencer 3', influencerId: '3' },
    { id: '12', content: 'Feed yahoo from Influencer 3', influencerId: '3' }
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
    },
    resetFeed: () => initialState
  }
});

export const { setSelectedPlatforms, setTheme, resetFeed } = feedSlice.actions;
export default feedSlice.reducer;
