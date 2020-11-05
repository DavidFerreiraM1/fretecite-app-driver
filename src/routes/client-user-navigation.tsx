import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Freightage,
  FreightageDetailsScreen,
  PaymentMethodScreen,
  PaymentMethodRegisterScreen,
  ProfitsSreen,
  TransferScreen,
  MapScreen,
} from '../screens';

const HeaderNull = () => null;

const Stack = createStackNavigator();

export function ClientUserNavigation() {
  return (
    <Stack.Navigator initialRouteName="freightage">
      <Stack.Screen
        name="freightage"
        component={Freightage}
        options={{header: HeaderNull}}
      />
      <Stack.Screen
        name="freightage-details"
        component={FreightageDetailsScreen}
        options={{header: HeaderNull}}
      />
      <Stack.Screen
        name="payment-method"
        component={PaymentMethodScreen}
        options={{header: HeaderNull}}
      />
      <Stack.Screen
        name="payment-method-register"
        component={PaymentMethodRegisterScreen}
        options={{header: HeaderNull}}
      />
      <Stack.Screen
        name="profits"
        component={ProfitsSreen}
        options={{header: HeaderNull}}
      />
      <Stack.Screen
        name="transfer"
        component={TransferScreen}
        options={{header: HeaderNull}}
      />
      <Stack.Screen
        name="map-screen"
        component={MapScreen}
        options={{header: HeaderNull}}
      />
    </Stack.Navigator>
  );
}
