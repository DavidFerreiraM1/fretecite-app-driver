/* eslint-disable no-alert */
import React, {useState, useEffect, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import {PermissionsAndroid, View, Text} from 'react-native';
import GeoLocalization from '@react-native-community/geolocation';
import {View, Text, Image} from 'react-native';
import {getPixelSize} from '../../utils/pixel-ratio';

import ClientLocation from '../../assets/img/user_location.png';
import {mapStyles} from './styles/map-screen-styles';

// Depois é necessário passar a chave para uma variável de ambiente
import { GOOGLE_API_KEY } from '../../../env';
const mapPaddingNumber = 64;

export function MapScreen() {
  const mockDestination = {longitude: -44.228659, latitude: -2.49934};

  const [state, setState] = useState({
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
  });

  // const handlerPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     );

  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       // alert('Está permitido!');
  //     } else {
  //       // alert('Não está permitido!');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  const getLocalization = () => {
    GeoLocalization.getCurrentPosition(
      (suc) => {
        setState({
          region: {
            latitude: suc.coords.latitude,
            longitude: suc.coords.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0,
          },
        });
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 5000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  };

  useEffect(() => {
    getLocalization();
  }, []);

  const useMapRef: any = useRef();

  return (
    <MapView
      ref={useMapRef}
      provider={PROVIDER_GOOGLE}
      style={mapStyles.root}
      mapType="standard"
      region={state.region}
      showsUserLocation
      rotateEnabled
      loadingEnabled
      maxZoomLevel={19}>
      <>
        <MapViewDirections
          strokeColor="#424A4A"
          apikey={GOOGLE_API_KEY}
          strokeWidth={4}
          origin={{
            latitude: state.region.latitude,
            longitude: state.region.longitude,
          }}
          destination={mockDestination} // Estes dados são temporarios
          onReady={(result) => {
            useMapRef.current.fitToCoordinates &&
              useMapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  top: getPixelSize(70),
                  bottom: getPixelSize(mapPaddingNumber),
                  left: getPixelSize(mapPaddingNumber),
                  right: getPixelSize(mapPaddingNumber),
                },
              });
          }}
        />
        <Marker coordinate={mockDestination}>
          <View style={{alignItems: 'center'}}>
            <Text style={mapStyles.clientTitle}>cliente</Text>
            <Text style={mapStyles.clientText}>Luana Pontes</Text>
            <Image source={ClientLocation} />
          </View>
        </Marker>
      </>
    </MapView>
  );
}
