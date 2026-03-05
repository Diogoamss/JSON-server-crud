import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigation } from '@react-navigation/native-stack'

import { HomeScreen } from './src/screens/HomeScreen';
import { AddEditScreen } from './src/screens/AddEditScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigation();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouterName="Home"  
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}}/>
        <Stack.Screen name="addEdit" component={AddEditScreen} options={{ title: 'addEdit'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}