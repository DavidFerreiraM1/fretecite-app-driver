
import React, {useState, useImperativeHandle, forwardRef} from 'react';
import {Animated, View, StatusBar, TouchableOpacity} from 'react-native';
import {modalMenuStyles as styles} from './styles';

// Icones não ativos
import CloseSolidSvg from '../../../assets/icons/close-solid/close-solid-white.svg';
// import UserSolidGrey from '../../../assets/icons/user-solid/user-solid-grey.svg';
import FreightageGrey from '../../../assets/icons/freightage-solid/freightage-solid-grey.svg';
// import InterrogationGrey from '../../../assets/icons/interrogation-solid/interrogation-grey.svg';
import PurseGrey from '../../../assets/icons/purse-solid/purse-grey.svg';

// Icones ativos
// import UserSolidWhite from '../../../assets/icons/user-solid/user-solid-white.svg';
import FreightageWhite from '../../../assets/icons/freightage-solid/freightage-solid-white.svg';
import ProfitsWhite from '../../../assets/icons/profits-solid/profits-solid-white.svg';
import ProfitsGrey from '../../../assets/icons/profits-solid/profits-solid-grey.svg';
// import InterrogationWhite from '../../../assets/icons/interrogation-solid/interrogation-white.svg';
import PurseWhite from '../../../assets/icons/purse-solid/purse-white.svg';

import {Option} from './options';

function _ModalMenu(props: any, ref: any) {
  const [modalView, setModalView] = useState(false);

  const animationTime = 300;
  const [fadeAnim] = useState(new Animated.Value(0));

  const handleOpen = () => {
    setModalView(true);
    Animated.timing(fadeAnim, {
      toValue: 0.98,
      duration: animationTime,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: animationTime,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setModalView(false);
    }, animationTime + 50);
  };

  useImperativeHandle(ref, () => ({
    open: () => handleOpen(),
  }));

  return (
    <>
      {modalView ? (
        <Animated.View
          style={{
            ...styles.animated,
            opacity: fadeAnim,
          }}>
          <StatusBar hidden showHideTransition="slide" />
          <View style={styles.body}>
            <View style={styles.optionsContent}>
              <View style={styles.rowContent}>
                {/* <Option
                    text="Perfil"
                    routeName="profile"
                    icon={<UserSolidGrey height={28} width={28} />}
                    iconSetActive={<UserSolidWhite height={28} width={28} />}
                    closeMenu={handleClose}
                  /> */}
                <Option
                  text="Fretes"
                  routeName="freightage"
                  icon={<FreightageGrey height={32} width={32} />}
                  iconSetActive={<FreightageWhite height={32} width={32} />}
                  closeMenu={handleClose}
                />
                <Option
text="Ganhos"
routeName="profits"
icon={<ProfitsGrey height={28} width={28} />}
iconSetActive={<ProfitsWhite height={32} width={32} />}
closeMenu={handleClose}
/>
              </View>
              <View style={styles.rowContent}>
                {/* <Option
                    text="Ajuda"
                    routeName="help"
                    icon={<InterrogationGrey height={32} width={32} />}
                    iconSetActive={
                      <InterrogationWhite height={32} width={32} />
                    }
                    closeMenu={handleClose}
                  /> */}
              </View>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleClose()}>
                <CloseSolidSvg height={32} width={32} />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      ) : null}
    </>
  );
}

export const ModalMenu = forwardRef(_ModalMenu);


