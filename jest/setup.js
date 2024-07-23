/* eslint-disable no-undef */
import * as ReactNative from 'react-native';
import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
// for persistor compatibility
jest.useFakeTimers();

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/ReactNative/UIManager');
jest.mock('react-native/Libraries/NativeModules/specs/NativeDevSettings');


jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native', () => {
  const NativeModules = {
    RNFBAppModule: {
      eventsNotifyReady: jest.fn(),
      eventsAddListener: jest.fn(),
      eventsRemoveListener: jest.fn(),
      addListener: jest.fn(),
      removeAllListeners: jest.fn(),
      removeSubscription: jest.fn(),
    },
    RNPermissions: {},
  };

  
    return {
    NativeModules: NativeModules,
    Animated: {
      ScrollView: jest.fn(),
      createAnimatedComponent: jest.fn(),
      forkEvent: jest.fn(),
    },
    SafeAreaView: 'SafeAreaView',
    ScrollView: 'ScrollView',
    NativeEventEmitter: jest.fn(),
    requireNativeComponent: jest.fn(),
    View: 'View',
    StatusBar: 'StatusBar',
    ViewPropTypes: {
      testID: '123',
    },
    TouchableOpacity: 'TouchableOpacity',
    RNFusedLocation: 'RNFusedLocation',
    UIManager: {
      getViewManagerConfig: jest.fn(),
    },
    StyleSheet: {
      create: () => ({}),
      flatten: jest.fn(),
    },
    Dimensions: {
      get: () => ({
        width: jest.fn(),
        height: jest.fn(),
      }),
    },
    Platform: {
      OS: 'android',
      select: jest.fn((selector) => selector),
    },
    Easing: {
      inOut: jest.fn(),
    },
    Image: 'Image',
    Text: 'Text',
    TextInput: 'TextInput',
    Input: 'Input',
    Modal: 'Modal',
    Keyboard: 'Keyboard',
    RNFusedLocation: {
      addListener: jest.fn(),
      getCurrentPosition: jest.fn(),
      removeListeners: jest.fn(),
      requestAuthorization: jest.fn(),
      setConfiguration: jest.fn(),
      startObserving: jest.fn(),
      stopObserving: jest.fn(),
    },
    PixelRatio: {
      roundToNearestPixel: jest.fn(),
    },
    FlatList: 'FlatList',
    ActivityIndicator: 'ActivityIndicator',
    TouchableHighlight: 'TouchableHighlight',
    Button: 'Button',
    ImageBackground: 'ImageBackground',
    CachedImage: 'CachedImage',
    Touchable: {
      Mixin: jest.fn(),
    },
    PanResponder: {
      create: () => {
        return {panHandlers: '124'};
      },
    },
    Overlay: 'Overlay',
  };
});

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: jest.fn(),
    RectButton: jest.fn(),
    PanGestureHandler: jest.fn(),
    TapGestureHandler: jest.fn(),
    FlingGestureHandler: jest.fn(),
    ForceTouchGestureHandler: jest.fn(),
    LongPressGestureHandler: jest.fn(),
    NativeViewGestureHandler: jest.fn(),
    PinchGestureHandler: jest.fn(),
    RotationGestureHandler: jest.fn(),
    Swipeable: jest.fn(),
    DrawerLayout: jest.fn(),
  };
});
global.__DEV__ = true;



jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
  useRoute: () => jest.fn(),
  useNavigationParam: jest.fn(
    jest.requireActual('@react-navigation/native').useNavigationParam,
  ),
}));

jest.mock('react-redux', () => ({
  useSelector: () => jest.fn(),
  useDispatch: () => jest.fn(),
}));




