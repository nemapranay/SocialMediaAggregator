import React from "react";
import { StyleSheet } from 'react-native'
import { THEME_COLOR } from "./Constants";
export const Styles = StyleSheet.create({
    container: { padding: 16 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
    btnContainer: { padding:16 , backgroundColor:THEME_COLOR, marginVertical:10}
  });
  