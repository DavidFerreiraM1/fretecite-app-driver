/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {freightageStyles as styles, DotSearchStatusEffectProps} from '../style';

import {CardBase} from '../../../card/card-base';
import {Button} from '../../../button/button';

import CollapseOpenIcon from '../../../../assets/icons/collapse-solid/collapse-open-solid-green.svg';
import CollapseCloseIcon from '../../../../assets/icons/collapse-solid/collapse-close-solid-green.svg';
import {DotSearchStatusEffect} from './card-item-dot-search-effect';

type Props = DotSearchStatusEffectProps;

export function CardItem(props: Props) {
  const {status} = props;

  const navigation = useNavigation();

  const [titleStatus, setTitleStatus] = useState({
    titleText: '',
    buttonInfo: '',
    viewbutton: true,
  });

  useEffect(() => {
    switch (status) {
      case 'searching':
        return setTitleStatus({
          ...titleStatus,
          titleText: 'Nova Solicitação - Imediado',
          buttonInfo: 'Aceitar',
        });
      case 'canceled':
        return setTitleStatus({
          ...titleStatus,
          titleText: 'Transporte cancelado!',
          buttonInfo: 'Cancelar',
          viewbutton: false,
        });
      case 'found':
        return setTitleStatus({
          ...titleStatus,
          titleText: 'Transporte Agendado',
          buttonInfo: 'Acompanhar',
        });
      case 'done':
        return setTitleStatus({
          ...titleStatus,
          titleText: 'Transporte Feito',
          viewbutton: false,
        });
      default:
        return setTitleStatus({
          ...titleStatus,
          titleText: 'Nenhum status informado!',
          buttonInfo: 'cancelar',
          viewbutton: false,
        });
    }
  }, [status]);

  const [viewDetails, setViewDetails] = useState(false);
  const handleViewDetails = () => {
    setViewDetails(!viewDetails);
  };

  const handleButtonSubmit = () => {
    switch (status) {
      case 'found':
        return navigation.navigate('client', {screen: 'freightage-details'});
      case 'searching':
        return alert('Aceitando!!!');
      default:
        return null;
    }
  };

  const renderButtonOpenMap = () => {
    const ButtonOpenMap = () => (
      <View style={styles.cardButtonOpenMapBox}>
        <TouchableOpacity
          style={styles.cardButtonOpenMap}
          onPress={() => navigation.navigate('map-screen')}>
          <Text style={styles.cardButtonOpenMapText}>Abrir mapa</Text>
        </TouchableOpacity>
      </View>
    );

    if (status === 'searching' || status === 'found') return <ButtonOpenMap />;
    return null;
  };

  return (
    <CardBase customStyle={{root: styles.customCard}}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeaderStatus}>
          <DotSearchStatusEffect status={status} />
          <Text style={styles.cardHeaderStatusText}>
            {titleStatus.titleText}
          </Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.cardBodyContentLeft}>
            <View>{/** Barra de slide */}</View>
            <View style={styles.cardStartAndEndTravelInfo}>
              <Text style={styles.cardSTravelStartItem}>
                <Text style={styles.cardTravelStage}>Origem: </Text>
                <Text style={styles.cardSTravelDescription}>
                  Rua Bacurituba, Nº 04, Quadra 01, Planalto Turu II, São Luís -
                  MA
                </Text>
              </Text>
              <Text style={styles.cardSTravelEndItem}>
                <Text style={styles.cardTravelStage}>Destino: </Text>
                <Text style={styles.cardSTravelDescription}>
                  Avenida São Luís Rei de França, Nº 1008, Turu, São Luís - MA
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.cardBodyContentRight}>
            <View style={styles.cardPriceContent}>
              <Text style={styles.cardPriceTitle}>Total</Text>
              <Text style={styles.cardPriceText}>R$ 150, 00</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <View style={styles.cardBottomContentLeft}>
            <TouchableOpacity onPress={handleViewDetails}>
              <View style={styles.cardBottomContentLeftCollapseArea}>
                {viewDetails ? (
                  <CollapseCloseIcon height={16} width={16} />
                ) : (
                  <CollapseOpenIcon height={16} width={16} />
                )}
                <Text style={styles.cardBottomContentLeftCollapseDetails}>
                  Detalhes
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.cardBottomAreaCollpased}>
              {viewDetails && (
                <>
                  <Text style={styles.cardBottomAreaDescription}>
                    Descrição
                  </Text>
                  <View style={styles.cardBottomAreaDetailsItems}>
                    <Text style={styles.cardBottomAreaDescriptionItem}>
                      Transportar 1 fogão e 1 geladeira
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
          <View style={styles.cardBottomContentRight}>
            {titleStatus.viewbutton && (
              <Button
                onPress={handleButtonSubmit}
                variant="outlined"
                color="secondary"
                text={titleStatus.buttonInfo}
                customStyles={{
                  root: styles.cardCancelButtonRoot,
                  container: styles.cardCancelButtonContainer,
                }}
              />
            )}
          </View>
        </View>
        {renderButtonOpenMap()}
      </View>
    </CardBase>
  );
}
