// App.js
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Provider as PaperProvider,
  MD2DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {setTheme} from './redux/slices/feedSlice';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons from react-native-vector-icons
import InfluencerProfileScreen from './screens/InfluencerProfileScreen';
import {Button} from 'react-native';
import {THEME_COLOR} from './common/Constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const isDarkMode =
    useSelector(state => state.feeds.theme) === 'dark' ? true : false;
  const tabBarOptions = {
    activeTintColor: isDarkMode ? 'white' : 'black',
    inactiveTintColor: isDarkMode ? 'gray' : 'darkgray',
    style: {
      backgroundColor: isDarkMode ? 'black' : 'white',
    },
    headerShown: false,
  };
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="home-outline"
              color={focused ? THEME_COLOR : color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="settings-outline"
              color={focused ? THEME_COLOR : color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  const dispatch = useDispatch();

  const isDarkModeState = useSelector(state => state.feeds.theme);
  const theme = isDarkModeState === 'dark' ? MD2DarkTheme : DefaultTheme;

  useEffect(() => {
    const checkTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      dispatch(setTheme(savedTheme));
    };
    checkTheme();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen
              name="InfluencerProfileScreen"
              component={InfluencerProfileScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
