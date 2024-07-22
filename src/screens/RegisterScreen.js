// screens/RegisterScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import ThemedText from '../common/ThemedText';
import {Styles} from '../common/Styles';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/slices/userSlice';
import {showAlert} from '../common/utils';
import {THEME_COLOR} from '../common/Constants';

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    // Perform registration logic here
    if (name === '' && email === '' && password === '') {
      showAlert('Error', 'Please enter details first');
      return;
    }
    let obj = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(setUser(obj));
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="gray"
        placeholder="Please Enter name here"
        value={name}
        onChangeText={setName}
        style={Styles.input}
      />
      <TextInput
        placeholderTextColor="gray"
        placeholder="Please Choose email-address"
        value={email}
        onChangeText={setEmail}
        style={Styles.input}
      />
      <TextInput
        placeholderTextColor="gray"
        placeholder="Choose a password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={Styles.input}
      />
      <View style={Styles.btnContainer}>
        <Button title="Register" color={THEME_COLOR} onPress={handleRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 16, flex: 1, justifyContent: 'center'},
});
