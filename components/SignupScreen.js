import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";
import React from "react";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  const key = "AIzaSyBUk623fpH-Ea-QygT5cyx_tY2pNnaoFIg"; // Replace with your API key

  const handleEmail = (value) => {
    setEmail(value);
  }

  const handlePassword = (value) => {
    setPassword(value);
  }

  const handleConfirmPassword = (value) => {
    setConfirmPassword(value);
  }

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${url}${key}`, {
        email: email,
        password: password,
        returnSecureToken: true,
      });

      console.log("Response:", response.data);
      console.log("Waiting for response.....");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text>{"Enter email"}</Text>
        <TextInput style={styles.input} onChangeText={(value) => { handleEmail(value) }} />
      </View>
      <View style={styles.inputContainer}>
        <Text>{"Enter password"}</Text>
        <TextInput secureTextEntry style={styles.input} onChangeText={(value) => { handlePassword(value) }} />
      </View>
      <View style={styles.inputContainer}>
        <Text>{"Enter confirm password"}</Text>
        <TextInput style={styles.input} onChangeText={(value) => { handleConfirmPassword(value) }} />
      </View>
      <Pressable onPress={() => handleSignUp()}>
        <View style={styles.button}>
          <Text>{"Sign up"}</Text>
        </View>
      </Pressable>

      <Pressable
        style={styles.navigationText}
        onPress={() => { navigation.navigate('Login') }}
      >
        <Text>{"Already have an account. Go to Login"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'column'
  },
  input: {
    borderColor: 'gray',
    borderRadius: 7,
    borderWidth: 1,
    height: 28,
    marginTop: 1,
    padding: 2
  },
  button: {
    marginTop: 8,
    alignItems: 'center',
    backgroundColor: 'blue', // Add a background color
    padding: 10,
    borderRadius: 5,
  },
  navigationText: {
    marginTop: 8,
    alignSelf: 'center'
  }
})

export default SignupScreen;
