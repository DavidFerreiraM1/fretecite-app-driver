import React from 'react';
import {View, Text, Image, Animated} from 'react-native';
import {freightageStyles as styles} from './style';

import StarOutlined from '../../../assets/icons/stars-svg/star-outlined.svg';
import ProfileFake from '../../../assets/img/transporter_profile_fake.png';
import {StyleHeaderProfileContextApi} from './freightage-context';

export function HeaderProfile() {
  return (
    <StyleHeaderProfileContextApi.Consumer>
      {({style: contextStyle}) => {
        return (
          <Animated.View
            style={[
              {...styles.profileRoot},
              {
                height: contextStyle.height,
              },
            ]}>
            <Animated.View
              style={{
                bottom: contextStyle.bottom,
              }}>
              <Animated.View
                style={[
                  {...styles.profileContent},
                  {
                    opacity: contextStyle.opacity,
                    bottom: contextStyle.height,
                  },
                ]}>
                <View style={styles.nameAndStarsContainer}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>José Carlos</Text>
                  </View>
                  <View style={styles.starsContainer}>
                    <View style={styles.star}>
                      <StarOutlined height={16} width={16} />
                    </View>
                    <View style={styles.star}>
                      <StarOutlined height={16} width={16} />
                    </View>
                    <View style={styles.star}>
                      <StarOutlined height={16} width={16} />
                    </View>
                    <View style={styles.star}>
                      <StarOutlined height={16} width={16} />
                    </View>
                    <View style={styles.star}>
                      <StarOutlined height={16} width={16} />
                    </View>
                  </View>
                </View>
                <View style={styles.photoContainer}>
                  <Image source={ProfileFake} style={styles.profilePhoto} />
                </View>
              </Animated.View>
            </Animated.View>
          </Animated.View>
        );
      }}
    </StyleHeaderProfileContextApi.Consumer>
  );
}
