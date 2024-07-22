// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ThemedText from '../common/ThemedText';
import { Styles } from '../common/Styles';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { showAlert } from '../common/utils';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleRegister = () => {
    // Perform registration logic here
    if(name === '' && email === '' && password === ''){
      showAlert('Error','Please enter details first')
      return;
    }
    let obj = {
      name:name,
      email:email,
      password:password
  }
  console.log("obj===",obj)
  dispatch(setUser(obj))
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <ThemedText>Name</ThemedText>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
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
  container: { padding: 16, flex:1, justifyContent:'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8, color:"grey" }
});
