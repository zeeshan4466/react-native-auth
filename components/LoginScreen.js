import { useNavigation } from "@react-navigation/native"
import { View, Text, TextInput, StyleSheet, Button, Pressable } from "react-native"

const LoginScreen  = ()=>{
    const navigation = useNavigation();
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
            <View style={styles.button}>
                <Button title="Login"/>
            </View>

            <Pressable 
                style={styles.navigationText}
                onPress={()=>{navigation.navigate('Signup')}}
                >
                <Text>{"create a new account"}</Text>
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


export default LoginScreen;