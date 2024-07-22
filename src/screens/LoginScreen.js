// screens/LoginScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import ThemedText from '../common/ThemedText';
import {Styles} from '../common/Styles';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentUser} from '../redux/slices/userSlice';
import {THEME_COLOR} from '../common/Constants';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const users = useSelector(state => state?.users?.users);

  function checkCredentials(email, password) {
    for (const user of users) {
      if (user.email === email && user.password === password) {
        dispatch(setCurrentUser(user));
        return true;
      }
    }
    return false;
  }

  const handleLogin = () => {
    // Perform login logic here
    if (checkCredentials(email, password)) {
      setEmail('');
      setPassword('');
      navigation.replace('Main');
    } else {
      Alert.alert(
        'Error',
        'Invalid credentials, Please register first if not signedup yet',
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="gray"
        placeholder="Enter Email address"
        value={email}
        onChangeText={setEmail}
        style={Styles.input}
      />
      <TextInput
        placeholderTextColor="gray"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={Styles.input}
      />
      <View style={Styles.btnContainer}>
        <Button title="Login" color={THEME_COLOR} onPress={handleLogin} />
      </View>
      <View style={Styles.btnContainer}>
        <Button
          title="Register"
          color={THEME_COLOR}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 16, flex: 1, justifyContent: 'center'},
  input: {
    height: 40,
    borderColor: THEME_COLOR,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: 'grey',
  },
});
