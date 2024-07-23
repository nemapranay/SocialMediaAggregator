// __tests__/HomeScreen.test.js
// __tests__/HomeScreen.test.js
import {expect, jest} from '@jest/globals';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeScreen from '../src/screens/HomeScreen';
import {followInfluencer, unfollowInfluencer} from '../src/redux/slices/influencerSlice';
import {setCurrentUser} from '../src/redux/slices/userSlice';

const mockStore = configureStore([]);

const initialState = {
  influencers: {
    influencers: [
      {id: '1', name: 'Influencer 1'},
      {id: '2', name: 'Influencer 2'},
    ],
  },
  users: {
    currentUser: {
      name: 'Test User',
      followedInfluencersId: [],
    },
  },
};

describe('HomeScreen', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    expect(getByText('Hello, Test User')).toBeTruthy();
    expect(getByText('All Influencers')).toBeTruthy();
  });

  test('follow button works correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    const followButton = getByText('Follow');
    fireEvent.press(followButton);

    const actions = store.getActions();
    expect(actions).toContainEqual(followInfluencer({id: '1', name: 'Influencer 1'}));
  });
});
