/* eslint-disable import/no-cycle */
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {registerStyles as styles} from './styles';
import {ContainerPage as Page} from '../../container-page/container-page';
import {Header} from '../../header/header';
import {StackNavigationProps} from '../../../routes/interfaces';

type Props = StackNavigationProps;

const fields = ['categoria', 'placa', 'modelo', 'cor', 'numeroDocumento'];

export function VehicleDataForm(props: Props) {
  const [state, setState] = useState({
    renderedFieldIndex: 0,
    nextText: 'Próximo',
    backtext: 'Voltar',
    fieldValues: {
      categoria: '',
      placa: '',
      modelo: '',
      cor: '',
      numeroDocumento: '',
    },
  });

  const back = () => {
    if (state.renderedFieldIndex - 1 >= 0) {
      setState({
        ...state,
        renderedFieldIndex: state.renderedFieldIndex - 1,
      });
    }
  };

  const next = () => {
    if (state.renderedFieldIndex + 1 < fields.length) {
      setState({
        ...state,
        renderedFieldIndex: state.renderedFieldIndex + 1,
      });
    }
    // Quando chegar no último campo executa a instrução abaixo
    if (state.renderedFieldIndex === fields.length - 1) {
      props.navigation.navigate('login');
      console.log(state.fieldValues);
    }
  };

  const renderBackText = () => {
    if (state.renderedFieldIndex === 0) {
      return '';
    }
    return 'Voltar';
  };
  const renderNextText = () => {
    if (state.renderedFieldIndex === fields.length - 1) {
      return 'Concluir';
    }
    return 'Próximo';
  };

  const renderTypeKeyboard = () => {
    return fields[state.renderedFieldIndex] === 'numeroDocumento'
      ? 'number-pad'
      : 'default';
  };

  const onChange = (fieldName: string, value: string) => {
    setState({
      ...state,
      fieldValues: {
        ...state.fieldValues,
        [fieldName]: value,
      },
    });
  };

  useEffect(() => {
    setState({
      ...state,
      backtext: renderBackText(),
      nextText: renderNextText(),
    });
  }, [state.renderedFieldIndex]);

  const fieldRender = (label: string, fieldName: string) => {
    return (
      <>
        {fields[state.renderedFieldIndex] === fieldName ? (
          <View style={styles.inputBox}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) =>
                onChange(fields[state.renderedFieldIndex], value)
              }
              keyboardType={renderTypeKeyboard()}
              autoFocus
            />
          </View>
        ) : null}
      </>
    );
  };

  return (
    <Page header={<Header noMenu title="Dados do veículo" />}>
      <View style={styles.contentBox}>
        <View style={styles.formContentBox}>
          {fieldRender('Informe a Categoria do seu veículo', 'categoria')}
          {fieldRender('Digite a Placa do veículo?', 'placa')}
          {fieldRender('Qual o seu Modelo?', 'modelo')}
          {fieldRender('Nos diga a cor do seu Veículo?', 'cor')}
          {fieldRender('Informe Número do documento', 'numeroDocumento')}
        </View>
      </View>
      <View style={styles.actionBox}>
        <TouchableOpacity style={styles.backButtonBox} onPress={back}>
          {state.backtext !== '' ? (
            <Text style={styles.backButton}>{state.backtext}</Text>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.nexButtonBox} onPress={next}>
          <Text style={styles.nextButton}>{state.nextText}</Text>
        </TouchableOpacity>
      </View>
    </Page>
  );
}
