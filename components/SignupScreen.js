import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const SignupScreen  = ()=>{
    const naviagtion = useNavigation();
    return (
        <View  style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text>{"Enter email"}</Text>
                <TextInput style={styles.input} onChangeText={()=>{}}/>
            </View>
            <View style={styles.inputContainer}>
                <Text>{"Enter password"}</Text>
                <TextInput style={styles.input}  onChangeText={()=>{}}/>
            </View>
            <View style={styles.inputContainer}>
                <Text>{"Enter confirm password"}</Text>
                <TextInput style={styles.input}  onChangeText={()=>{}}/>
            </View>
            <View style={styles.button}>
                <Button title="Sign up"/>
            </View>

            <Pressable 
                style={styles.navigationText}
                onPress={()=>{naviagtion.navigate('Login')}}
            >
                <Text>{"Already have account. Go to Login"}</Text>
            </Pressable>

        </View>
    )
}


const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        paddingHorizontal:16
    },
    inputContainer:{
        flexDirection:'column'
    },
    input:{
        border:1,
        borderRadius:7,
        borderWidth:1,
        height:28,
        marginTop:1,
        padding:2

    },
    button:{
        marginTop:8,
    },
    navigationText:{
        marginTop:8,
        alignSelf:'center'
    }
})
export default SignupScreen;