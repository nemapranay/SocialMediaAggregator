// slices/feedSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  feeds: [
    {
      id: '1',
      content: '[Facebook] Heritage is not just history. It is a shared consciousness of humanity. We must leverage it to enhance global well-being and forge deeper connections.',
      influencerId: '1',
      platform: 'facebook',
    },
    {
      id: '2',
      content: '[Instagram] India considers the preservation of global heritage as its responsibility. We will contribute one million dollars to the UNESCO World Heritage Centre.',
      influencerId: '1',
      platform: 'instagram',
    },
    {
      id: '3',
      content: '[Twitter] india’s heritage showcases top-notch engineering too! And there are several instances of it.',
      influencerId: '1',
      platform: 'twitter',
    },
    {
      id: '4',
      content: '[Yahoo] पावन पर्व गुरु पूर्णिमा की सभी देशवासियों को अनेकानेक शुभकामनाएं।',
      influencerId: '1',
      platform: 'yahoo',
    },
    {
      id: '5',
      content: '[FB] Special win. Thank you to all our fans for turning up in numbers. ',
      influencerId: '2',
      platform: 'facebook',
    },
    {
      id: '6',
      content: '[Instagram] A picture cannot make you emotional.',
      influencerId: '2',
      platform: 'instagram',
    },
    {
      id: '7',
      content: '[X] Rohit Sharma and Virat Kohli - 𝑹𝒆𝒕𝒊𝒓𝒆𝒅 𝒇𝒓𝒐𝒎 𝐓𝟐𝟎𝐈𝐬.',
      influencerId: '2',
      platform: 'twitter',
    },
    {
      id: '8',
      content: '[Yahoo] Rahul Dravid - 𝑺𝒊𝒈𝒏𝒆𝒅 𝒐𝒇𝒇 𝒇𝒓𝒐𝒎 𝒉𝒊𝒔 𝑰𝒏𝒅𝒊𝒂 𝒄𝒐𝒂𝒄𝒉 𝒔𝒕𝒊𝒏𝒕.',
      influencerId: '2',
      platform: 'yahoo',
    },
    {
      id: '9',
      content: '[Facebook] amadan Mubarak to all my Muslim friends nd fans.',
      influencerId: '3',
      platform: 'facebook',
    },
    {
      id: '10',
      content: '[Instagram] The secret of success in life is for a man to be ready for his opportunity when it comes.',
      influencerId: '3',
      platform: 'instagram',
    },
    {
      id: '11',
      content: '[X] When you absolutely believe in yourself and your ability to succeed, nothing will stop you.',
      influencerId: '3',
      platform: 'twitter',
    },
    {
      id: '12',
      content: '[Yahoo] Thanks for all your love and wishes guys love you all.',
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
