import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {paymentMethodRegisterScreen as styles} from './styles/payment-method-register-styles';
import QuestionIcon from '../../assets/icons/question-solid/question-solid-grey.svg';
import {
  ContainerPage as Page,
  Header,
  TextInput,
  Button,
} from '../../components';

export function PaymentMethodRegisterScreen() {
  const navigate = useNavigation();

  return (
    <Page header={<Header title="Adicionar Cartão" />}>
      <View style={styles.headerTitle}>
        <Text style={styles.titleText}>Dados do Cartão</Text>
      </View>
      <View style={styles.formBox}>
        <View>
          <TextInput placeholder="Nome do Titular" fullwidth />
        </View>
        <View>
          <TextInput placeholder="Número do Cartão" fullwidth />
        </View>
        <View style={styles.rowBox}>
          <View style={styles.sideRowLeft}>
            <TextInput
              placeholder="CVV"
              fullwidth
              decoratedEnd={<QuestionIcon height={24} width={24} />}
            />
          </View>
          <View style={styles.sideRowRight}>
            <TextInput
              placeholder="MM/AAAA"
              fullwidth
              decoratedEnd={<QuestionIcon height={24} width={24} />}
            />
          </View>
        </View>
      </View>
      <>
        <View style={styles.bottomBox}>
          <View style={styles.sidedBox}>
            <Button
              onPress={() => navigate.goBack()}
              fullWidth
              variant="outlined"
              color="primary"
              text="Cancelar"
            />
          </View>
          <View style={styles.sidedBox}>
            <Button
              customStyles={{
                container: styles.confirmButon,
              }}
              fullWidth
              text="Prosseguir"
            />
          </View>
        </View>
      </>
    </Page>
  );
}
