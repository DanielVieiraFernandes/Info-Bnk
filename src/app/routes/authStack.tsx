import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Register } from '../screens/register';
import { SignIn } from '../screens/signin';
import { HomeAuth } from '../screens/homeAuth';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='HomeAuth' component={HomeAuth}/>
    </Stack.Navigator>
  )
}