import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PublicNavigation} from './public-navigation';
import {ClientUserNavigation} from './client-user-navigation';

const HeaderNull = () => null;

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="public">
        <Stack.Screen
          name="public"
          component={PublicNavigation}
          options={{header: HeaderNull}}
        />
        <Stack.Screen
          name="client"
          component={ClientUserNavigation}
          options={{header: HeaderNull}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
