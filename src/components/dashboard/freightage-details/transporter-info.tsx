import React from 'react';
import {View, Text, Image} from 'react-native';
import ClientProfileFake from '../../../assets/img/profile-fake.jpg';
import {freightageStyleDetailsStyles as styles} from './styles';

export function TransporterInfo() {
  return (
    <View style={styles.transporterInfo}>
      <View style={styles.transporterInfoContentText}>
        <Text style={styles.transporterName}>Luana Pontes</Text>
        {/* <View style={styles.vehicleTransporterInfoLine}>
          <Text style={styles.vehicleTransporterInfoProp}>Modelo</Text>
          <Text style={styles.vehicleTransporterInfoValue}>Chevrolet S10</Text>
        </View>
        <View style={styles.vehicleTransporterInfoLine}>
          <Text style={styles.vehicleTransporterInfoProp}>Placa</Text>
          <Text style={styles.vehicleTransporterInfoValue}>xxx-xxxx</Text>
        </View>
        <View style={styles.vehicleTransporterInfoLine}>
          <Text style={styles.vehicleTransporterInfoProp}>Cor</Text>
          <Text style={styles.vehicleTransporterInfoValue}>Prata</Text>
        </View> */}
      </View>
      <View style={styles.transporterPhotoBox}>
        <Image
          style={styles.transporterPhoto}
          source={ClientProfileFake}
        />
      </View>
    </View>
  );
}
