// screens/SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/slices/feedSlice';
import ThemedText from '../common/ThemedText';

export default function SettingsScreen() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 }
});
