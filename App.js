// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';

import { View } from "react-native-web";


// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <Text>{"Welcome to react native"}</Text>
    </View>
    // <Stack.Navigator
    //   screenOptions={{
    //     headerStyle: { backgroundColor: Colors.primary500 },
    //     headerTintColor: 'white',
    //     contentStyle: { backgroundColor: Colors.primary100 },
    //   }}
    // >
    //   <Stack.Screen name="Login" component={LoginScreen} />
    //   <Stack.Screen name="Signup" component={SignupScreen} />
    // </Stack.Navigator>
  );
}

