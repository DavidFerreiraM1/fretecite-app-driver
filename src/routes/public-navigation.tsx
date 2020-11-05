import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, RegisterScreen} from '../screens';

const HeaderNull = () => null;

const Stack = createStackNavigator();

export function PublicNavigation() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{header: HeaderNull}}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{header: HeaderNull}}
      />
    </Stack.Navigator>
  );
}
