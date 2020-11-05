import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {inputStyles as styles, setColor} from './input-styles';

interface OwnProps {
  stateValue: any;
  inputValue: any;
  onChange?: (value: string) => any;
}

interface StyleProps {
  color?: 'primary' | 'secondary';
}

type Props = OwnProps & StyleProps;

export function InputRadio(props: Props) {
  const {inputValue, onChange, stateValue, color} = props;
  const [checked, setChecked] = useState(false);
  const setValue = () => {
    if (!checked) {
      setChecked(true);
      onChange !== undefined && onChange(inputValue);
    }
  };

  useEffect(() => {
    if (stateValue === inputValue) setChecked(true);
    else setChecked(false);
  }, [stateValue]);

  const setBgColor = (param?: 'primary' | 'secondary') => {
    switch (param) {
      case 'primary':
        return styles.radioButtonBgColorPrimary;
      case 'secondary':
        return styles.radioButtonBgColorSecondary;
      default:
        return styles.radioButtonBgColorPrimary;
    }
  };

  return (
    <View style={[styles.inputRadioContainer, setColor(color)]}>
      <TouchableOpacity style={styles.inputRadioBackground} onPress={setValue}>
        {checked && (
          <View style={[styles.raidioButtonChecked, setBgColor(color)]} />
        )}
      </TouchableOpacity>
    </View>
  );
}
