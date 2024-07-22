import React from 'react';
import {Alert} from 'react-native';

export const showAlert = (title, subTitle) => {
  Alert.alert(title, subTitle);
};
