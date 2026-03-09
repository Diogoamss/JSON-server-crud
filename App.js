import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import  HomeScreen  from './src/screens/HomeScreen';
import  AddEditScreen  from './src/screens/AddEditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"  
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}}/>
        <Stack.Screen name="AddEdit" component={AddEditScreen} options={{ title: 'AddEdit'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}