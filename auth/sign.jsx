import React, {useRef} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

export default function SignIn() {
  const navigation = useNavigation();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  return (
    <>
      {/* <Stack.Screen options={{title: 'sign up', headerShown: false}} /> */}
      <View style={styles.container}>
        <View>
          <Text style={styles.loginText}>Login to your account </Text>
          <Text style={styles.subtitle}>(Let's start the journey)</Text>
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter email or username"
            placeholderTextColor="#AAAAAA"
            nativeID="email"
            backgroundColor="#FFF"
            onChangeText={text => {
              emailRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            nativeID="password"
            placeholderTextColor="#AAAAAA"
            backgroundColor="#FFF"
            onChangeText={text => {
              passwordRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          //   onPress={() => {
          //     navigation.replace('/screens/EquipmentCard');
          //   }}
          onPress={() => {
            navigation.replace('EquipmentCard');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Click here to <Text style={styles.forgotText}> Forgot Password</Text>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F9FF',
  },
  label: {
    color: '#43436A',
  },
  textInput: {
    width: width * 0.8,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 5,
    marginVertical: 10,
    padding: 12,
    elevation: 1,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#4577EF',
    padding: 14,
    width: width * 0.8,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
  loginText: {
    color: '#43436A',
    fontSize: 32,
    fontWeight: 'bold',
    width: width * 0.8,
  },
  subtitle: {
    color: '#43436A',
    fontWeight: 'normal',
    fontSize: 14,
    marginBottom: 32,
  },

  forgotText: {
    color: '#4577EF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
  },
  signUpText: {
    marginTop: 32,
  },
  signupLabel: {
    color: '#43436A',
  },
});
