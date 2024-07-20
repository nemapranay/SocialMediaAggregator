// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import ThemedText from '../common/ThemedText';
import { Styles } from '../common/Styles'
import { useSelector } from 'react-redux';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = useSelector((state)=>state?.users?.users)

  function checkCredentials(email, password) {
    for (const user of users) {
      if (user.email === email && user.password === password) {
        return true;
      }
    }
    return false;
  }

  const handleLogin = () => {
    // Perform login logic here
    if (checkCredentials(email, password)) {
      setEmail('')
      setPassword('')
      navigation.replace('Main');
    } else {
      Alert.alert("Error","Wrong Data")
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText>Email</ThemedText>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />
      <ThemedText>Password</ThemedText>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <View style={Styles.btnContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={Styles.btnContainer}>
        <Button title="Register" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, justifyContent: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 }
});
