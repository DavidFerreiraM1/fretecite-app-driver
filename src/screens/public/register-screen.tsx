import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {registerStyles as styles} from './styles/regsiter-styles';
import {PersonalDatForm, VehicleDataForm} from '../../components/dashboard';
import {StackNavigationProps} from '../../routes/interfaces';

const TabRegister = createStackNavigator();

type Props = StackNavigationProps;

export function RegisterScreen(props: Props) {
  return (
    <View style={styles.root}>
      <TabRegister.Navigator
        screenOptions={{header: () => null}}
        initialRouteName="personal-data-form">
        <TabRegister.Screen
          name="personal-data-form"
          component={PersonalDatForm}
        />
        <TabRegister.Screen
          name="vehicle-data-form"
          component={VehicleDataForm}
        />
      </TabRegister.Navigator>
    </View>
  );
}
