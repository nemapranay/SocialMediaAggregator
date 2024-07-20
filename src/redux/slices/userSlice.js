// slices/feedSlice.js
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  users:[],
  currentUser:{
    name:"",
    followedInfluencersId:[]
  }
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = [...state.users , action.payload]
    },
    setCurrentUser: (state, action) => {
      state.currentUser = {...state.currentUser , ...action.payload}
    },
    resetUser: () => initialState
  }
});

export const { setUser, setCurrentUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
