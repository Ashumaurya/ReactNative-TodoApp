import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Routes/Home';
import NewTodoInput from './Routes/NewTodoInput';

import Data, { cardContext } from './contextApi/cardContext';


const Stack = createStackNavigator();


export default function App() {
  return (
    <Data>
    <NavigationContainer>
    <Stack.Navigator initialRouteName = 'TodoApp' 
    screenOptions = {{
      headerStyle: {
            backgroundColor: 'black',
            
          },
          headerTintColor: 'white',
          headerTitleStyle: {
          fontWeight: 'bold'},
          }}>
    <Stack.Screen name = "TodoApp" 
    component = {Home}
      options = {{
        cardStyle : {
          flex : 1
        }
      }}
    />
    <Stack.Screen name = "New Todo" component = {NewTodoInput}  />
    </Stack.Navigator>
    <StatusBar style="white" backgroundColor = 'white'/>
    </NavigationContainer>
</Data>
  );
}

