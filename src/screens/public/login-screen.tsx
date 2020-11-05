import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {ContainerPage as Page, Button} from '../../components';
import {StackNavigationProps} from '../../routes/interfaces';
import {loginStyles} from './styles/loginStyles';
import LogoSvg from '../../assets/icons/logo-fretecity/logo-fretecity-driver-primary.svg';

type Props = StackNavigationProps;

export function Login(props: Props) {
  const {navigation} = props;
  return (
    <Page customStyles={{bodyContainer: loginStyles.root}}>
      <View style={loginStyles.pageBody}>
        <View style={loginStyles.logoBox}>
          <LogoSvg heigth={62} width={210} />
        </View>
        <View style={loginStyles.formBox}>
          <View style={loginStyles.buttonLoginBox}>
            <Button
              fullWidth
              text="Entrar"
              onPress={() => navigation.navigate('client')}
            />
            <View style={loginStyles.forgotPasswordBox}>
              <TouchableOpacity>
                <Text style={loginStyles.forgotPasswordText}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <>
        <View style={loginStyles.registerBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('public', {screen: 'register'})}>
            <Text style={loginStyles.registerText}>cadastrar</Text>
          </TouchableOpacity>
        </View>
      </>
    </Page>
  );
}
