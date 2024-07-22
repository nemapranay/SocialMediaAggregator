// slices/influencerSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  influencers: [
    {id: '1', name: 'Narendra Modi'},
    {id: '2', name: 'Virat kohli'},
    {id: '3', name: 'Ranbir kapoor'}
  ],
  followedInfluencers: [],
};

const influencerSlice = createSlice({
  name: 'influencers',
  initialState,
  reducers: {
    followInfluencer: (state, action) => {
      state.followedInfluencers.push(action.payload);
    },
    unfollowInfluencer: (state, action) => {
      state.followedInfluencers = state.followedInfluencers.filter(
        influencer => influencer.id !== action.payload.id,
      );
    },
    resetInfluencer: () => initialState,
  },
});

export const {followInfluencer, unfollowInfluencer, resetInfluencer} =
  influencerSlice.actions;
export default influencerSlice.reducer;
