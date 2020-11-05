import React, {useEffect} from 'react';
import {View, ScrollView, Animated} from 'react-native';

import {freightageStyles as styles} from './style';
import {CardItem} from './card-item-list/card-item';
import {StyleHeaderProfileContextApi} from './freightage-context';
// import {getList} from '../../../services/transporter-freight-service';

export function FreightageRequestList() {
  // const requestList = async () => {
  //   console.log(await getList(0));
  // };

  // useEffect(() => {
  //   requestList();
  // }, []);
  return (
    <StyleHeaderProfileContextApi.Consumer>
      {({setValue}) => {
        return (
          <>
            <ScrollView
              scrollEventThrottle={16}
              style={styles.listRoot}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        y: setValue !== undefined && setValue,
                      },
                    },
                  },
                ],
                {
                  useNativeDriver: false,
                },
              )}>
              <View style={styles.listContainer}>
                <CardItem status="searching" />
                <CardItem status="found" />
                <CardItem status="found" />
                <CardItem status="found" />
                <CardItem status="found" />
              </View>
            </ScrollView>
          </>
        );
      }}
    </StyleHeaderProfileContextApi.Consumer>
  );
}
