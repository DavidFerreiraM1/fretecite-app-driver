import React from 'react';
import {View} from 'react-native';
import {ContainerPage as Page, Header, CircleButton} from '../../components';
import {PaymentMethodsContent} from '../../components/dashboard';
import {paymentMethodStyles as styles} from './styles/payment-method-styles';
import AdditionIcon from '../../assets/icons/addition-solid/addition-solid-white.svg';
import {StackNavigationProps} from '../../routes/interfaces';

type Props = StackNavigationProps;

export function PaymentMethodScreen(props: Props) {
  return (
    <Page header={<Header title="Formas de Pagamento" />}>
      <View style={styles.content}>
        <PaymentMethodsContent />
      </View>
      <>
        <View style={styles.buttonBottomContainer}>
          <CircleButton
            onPress={() =>
              props.navigation.navigate('client', {
                screen: 'payment-method-register',
              })
            }
            variant="contained"
            color="secondary"
            customStyles={{
              root: styles.buttonBottomComponent,
              container: styles.buttonBottom,
            }}>
            <AdditionIcon />
          </CircleButton>
        </View>
      </>
    </Page>
  );
}
