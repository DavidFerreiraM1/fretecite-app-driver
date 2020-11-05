import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import {ContainerPage as Page, Header, CircleButton} from '../../components';
import {
  FreightageRequestList,
  FreightageDoneList,
  HeaderProfile,
  StyleHeaderProfileContextProvider,
  FreightScheduledList,
} from '../../components/dashboard';
import {freightStyles as styles} from './styles/freight-styles';
import AdditionIcon from '../../assets/icons/addition-solid/addition-solid-white.svg';
import {StackNavigationProps} from '../../routes/interfaces';

const Tab = createMaterialTopTabNavigator();

type Props = StackNavigationProps;
export function Freightage(props: Props) {
  return (
    <Page
      header={<Header title="Fretes" />}
      customStyles={{
        root: styles.page,
        bodyContainer: styles.container,
      }}>
      <StyleHeaderProfileContextProvider>
        <HeaderProfile />
        <Tab.Navigator
          initialRouteName="requests"
          tabBarOptions={{
            activeTintColor: '#FFFFFF',
            indicatorStyle: {
              backgroundColor: '#FFFFFF',
            },
            labelStyle: {
              textTransform: 'capitalize',
              fontFamily: 'Roboto-Regular',
              fontSize: 16,
            },
            style: {
              backgroundColor: '#005537',
            },
          }}>
          <Tab.Screen
            name="requests"
            options={{tabBarLabel: 'Solicitações'}}
            component={FreightageRequestList}
          />
          <Tab.Screen
            name="freight-done"
            options={{tabBarLabel: 'Realizados'}}
            component={FreightageDoneList}
          />
          <Tab.Screen
            name="scheduled"
            options={{tabBarLabel: 'Agendados'}}
            component={FreightScheduledList}
          />
        </Tab.Navigator>
      </StyleHeaderProfileContextProvider>
    </Page>
  );
}
