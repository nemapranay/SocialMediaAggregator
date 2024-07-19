// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ThemedText from '../common/ThemedText';
import { Styles } from '../common/Styles';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <ThemedText>Email</ThemedText>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />
      <ThemedText>Password</ThemedText>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <View style={Styles.btnContainer}>
      <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 }
});
