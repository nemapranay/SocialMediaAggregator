// __mocks__/react-native.js
jest.mock('react-native/Libraries/Utilities/Platform', () => {
    const Platform = jest.requireActual('react-native/Libraries/Utilities/Platform');
    Platform.OS = 'ios'; // or 'android'
    return Platform;
  });
  
  jest.mock('react-native/Libraries/BatchedBridge/NativeModules', () => ({
    ...jest.requireActual('react-native/Libraries/BatchedBridge/NativeModules'),
    RNPermissions: {
      check: jest.fn(),
      request: jest.fn(),
    },
  }));
  