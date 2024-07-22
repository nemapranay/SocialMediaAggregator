import React from 'react';
import {StyleSheet} from 'react-native';
import {THEME_COLOR} from './Constants';
export const Styles = StyleSheet.create({
  container: {padding: 16},
  input: {
    height: 40,
    borderColor: THEME_COLOR,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: THEME_COLOR,
    borderRadius: 10,
  },
  btnContainer: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: THEME_COLOR,
  },
});
