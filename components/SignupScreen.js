import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable } from "react-native";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import axios from "axios";
import React from "react";

const SignupScreen = () => {
    const naviagtion = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    const key = "AIzaSyBUk623fpH-Ea-QygT5cyx_tY2pNnaoFIg"
    const handleEmail = (value) => {
        console.log(value);
        setEmail(value)
    }
    const handlePassword = (value) => {
        setPassword(value)
    }
    const handleConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    const handleSignUp = async () => {
        console.log(url + key);
        const httpResponse = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
            {
            email:email,
            password:password,
            // returnSecureToken:true,
        })
        console.log("Waiting for response.....");
        console.log("httpResponse: ",httpResponse);
    }


    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text>{"Enter email"}</Text>
                <TextInput style={styles.input} onChangeText={(value) => { handleEmail(value) }} />
            </View>
            <View style={styles.inputContainer}>
                <Text>{"Enter password"}</Text>
                <TextInput style={styles.input} onChangeText={(value) => { handlePassword(value) }} />
            </View>
            <View style={styles.inputContainer}>
                <Text>{"Enter confirm password"}</Text>
                <TextInput style={styles.input} onChangeText={(value) => { handleConfirmPassword(value) }} />
            </View>
            {/* <Pressable onPress={() => handleSignUp()}> */}
                <View style={styles.button}>
                    <Button title="Sign up" onPress={handleSignUp} />
                </View>
            {/* </Pressable> */}

            <Pressable
                style={styles.navigationText}
                onPress={() => { naviagtion.navigate('Login') }}
            >
                <Text>{"Already have account. Go to Login"}</Text>
            </Pressable>

            {/* {console.log(email,password,confirmPassword)} */}

        </View>
    )
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
        border: 1,
        borderRadius: 7,
        borderWidth: 1,
        height: 28,
        marginTop: 1,
        padding: 2

    },
    button: {
        marginTop: 8,
    },
    navigationText: {
        marginTop: 8,
        alignSelf: 'center'
    }
})
export default SignupScreen;