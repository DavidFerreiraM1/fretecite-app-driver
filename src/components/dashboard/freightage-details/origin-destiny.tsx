import React from 'react';
import {View, Text} from 'react-native';
import {freightageStyleDetailsStyles as styles} from './styles';

interface Props {
  transporterImmedate?: boolean;
}

export function OriginAndDestiny(props: Props) {
  const {transporterImmedate} = props;
  const setColorUrgencyTextImmediate = (immediate?: boolean) => {
    if (immediate) return {...styles.transporteUrgencyTextImmediate};
    return null;
  };

  return (
    <View style={styles.originAndDestinyContent}>
      {transporterImmedate === true && (
        <View>
          <Text
            style={[
              styles.transporteUrgencyText,
              setColorUrgencyTextImmediate(transporterImmedate),
            ]}>
            Transporte imediato
          </Text>
        </View>
      )}

      <View style={styles.originAndDestinyBody}>
        <View style={styles.originAndDestinyBodyContentLeft}>
          <View>{/** Barra de slide */}</View>
          <View style={styles.originAndDestinyStartAndEndTravelInfo}>
            <Text style={styles.originAndDestinySTravelStartItem}>
              <Text style={styles.originAndDestinyTravelStage}>Origem: </Text>
              <Text style={styles.originAndDestinySTravelDescription}>
                Rua Bacurituba, Nº 04, Quadra 01, Planalto Turu II, São Luís -
                MA
              </Text>
            </Text>
            <Text style={styles.originAndDestinySTravelEndItem}>
              <Text style={styles.originAndDestinyTravelStage}>Destino: </Text>
              <Text style={styles.originAndDestinySTravelDescription}>
                Avenida São Luís Rei de França, Nº 1008, Turu, São Luís - MA
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.originAndDestinyBodyContentRight}>
          <View style={styles.originAndDestinyPriceContent}>
            <Text style={styles.originAndDestinyPriceTitle}>Total</Text>
            <Text style={styles.originAndDestinyPriceText}>R$ 150,00</Text>
          </View>
        </View>
      </View>
      <View style={styles.originAndDestinyBottom}>
        <Text style={styles.originAndDestinyBottomAreaDescription}>
          Descrição
        </Text>
        <View style={styles.originAndDestinyBottomAreaDetailsItems}>
          <Text style={styles.originAndDestinyBottomAreaDescriptionItem}>
            Transportar 1 fogão e 1 geladeira
          </Text>
        </View>
      </View>
    </View>
  );
}
