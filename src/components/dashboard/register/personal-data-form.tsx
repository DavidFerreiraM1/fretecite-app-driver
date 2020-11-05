/* eslint-disable import/no-cycle */
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {registerStyles as styles} from './styles';
import {ContainerPage as Page} from '../../container-page/container-page';
import {Header} from '../../header/header';
import {StackNavigationProps} from '../../../routes/interfaces';

type Props = StackNavigationProps;

const fields = [
  'nome',
  'estado',
  'cidade',
  'fone',
  'email',
  'senha',
  'confirmSenha',
];

export function PersonalDatForm(props: Props) {
  const [state, setState] = useState({
    renderedFieldIndex: 0,
    nextText: 'Próximo',
    backtext: 'Voltar',
    fieldValues: {
      nome: '',
      estado: '',
      cidade: '',
      fone: '',
      email: '',
      senha: '',
      confirmSenha: '',
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
      props.navigation.navigate('vehicle-data-form');
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
      return 'Seguir para dados do veículo';
    }
    return 'Próximo';
  };

  const renderScurityText = () => {
    return (
      fields[state.renderedFieldIndex] === 'senha' ||
      fields[state.renderedFieldIndex] === 'confirmSenha'
    );
  };
  const renderTypeKeyboard = () => {
    return fields[state.renderedFieldIndex] === 'fone'
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
              secureTextEntry={renderScurityText()}
              keyboardType={renderTypeKeyboard()}
              autoFocus
            />
          </View>
        ) : null}
      </>
    );
  };

  return (
    <Page header={<Header noMenu title="Cadastro" />}>
      <View style={styles.contentBox}>
        <View style={styles.formContentBox}>
          {fieldRender('Informe seu nome completo', 'nome')}
          {fieldRender('Qual Estado você mora?', 'estado')}
          {fieldRender('E a sua Cidade?', 'cidade')}
          {fieldRender('Digite o número do seu Celular', 'fone')}
          {fieldRender('Informe seu Email', 'email')}
          {fieldRender('Crie uma Senha', 'senha')}
          {fieldRender('Repita a Senha digitada anteriormente', 'confirmSenha')}
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
