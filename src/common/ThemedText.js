// components/ThemedText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function ThemedText({ children, style, ...props }) {
    const theme = useSelector(state => state.feeds.theme);
  const isDarkMode = theme === 'dark' ? true : false
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <Text style={[styles.text, { color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // Any other default styles you want for your text
  },
});
