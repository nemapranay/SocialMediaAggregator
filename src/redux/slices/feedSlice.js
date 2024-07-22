// slices/feedSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  feeds: [
    {
      id: '1',
      content: 'Some facebook feed from Influencer 1',
      influencerId: '1',
      platform: 'facebook',
    },
    {
      id: '2',
      content: 'Some instagram feed from Influencer 1',
      influencerId: '1',
      platform: 'instagram',
    },
    {
      id: '3',
      content: 'Some twitter feed from Influencer 1',
      influencerId: '1',
      platform: 'twitter',
    },
    {
      id: '4',
      content: 'Some yahoo feed from Influencer 1',
      influencerId: '1',
      platform: 'yahoo',
    },
    {
      id: '5',
      content: 'Feed facebook Influencer 2',
      influencerId: '2',
      platform: 'facebook',
    },
    {
      id: '6',
      content: 'Feed instagram Influencer 2',
      influencerId: '2',
      platform: 'instagram',
    },
    {
      id: '7',
      content: 'Feed twitter Influencer 2',
      influencerId: '2',
      platform: 'twitter',
    },
    {
      id: '8',
      content: 'Feed yahoo Influencer 2',
      influencerId: '2',
      platform: 'yahoo',
    },
    {
      id: '9',
      content: 'Feed facebook from Influencer 3',
      influencerId: '3',
      platform: 'facebook',
    },
    {
      id: '10',
      content: 'Feed instagram from Influencer 3',
      influencerId: '3',
      platform: 'instagram',
    },
    {
      id: '11',
      content: 'Feed twitter from Influencer 3',
      influencerId: '3',
      platform: 'twitter',
    },
    {
      id: '12',
      content: 'Feed yahoo from Influencer 3',
      influencerId: '3',
      platform: 'yahoo',
    },
  ],
  selectedPlatforms: ['facebook', 'instagram', 'twitter', 'yahoo'],
  theme: 'light',
};

const feedSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    setSelectedPlatforms: (state, action) => {
      state.selectedPlatforms = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    resetFeed: () => initialState,
  },
});

export const {setSelectedPlatforms, setTheme, resetFeed} = feedSlice.actions;
export default feedSlice.reducer;
