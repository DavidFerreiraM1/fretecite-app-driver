import React from 'react';
import {View, ScrollView, Animated} from 'react-native';
import {freightageStyles as styles} from './style';
import {CardItem} from './card-item-list/card-item';
import {StyleHeaderProfileContextApi} from './freightage-context';

export function FreightageDoneList() {
  return (
    <StyleHeaderProfileContextApi.Consumer>
      {({setValue}) => {
        return (
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
              <CardItem status="done" />
              <CardItem status="done" />
              <CardItem status="done" />
              <CardItem status="done" />
            </View>
          </ScrollView>
        );
      }}
    </StyleHeaderProfileContextApi.Consumer>
  );
}
