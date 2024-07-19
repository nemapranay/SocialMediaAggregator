// screens/SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/slices/feedSlice';
import ThemedText from '../common/ThemedText';
import { THEME_COLOR } from '../common/Constants';

export default function SettingsScreen({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    };

    loadTheme();
  }, []);

  const toggleDarkMode = async () => {
    dispatch(setTheme(isDarkMode ? 'light' : 'dark'))
    setIsDarkMode(!isDarkMode);
    await AsyncStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    // Apply theme changes here

  };

  return (
    <View style={styles.container}>
      <ThemedText>Dark Mode</ThemedText>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <View style={styles.btnContainer}>
          <ThemedText>Logout</ThemedText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  btnContainer: { padding:16 , backgroundColor:THEME_COLOR, marginVertical:10}
});
