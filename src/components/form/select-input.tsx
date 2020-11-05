/* eslint-disable react/no-array-index-key */
import React from 'react';
import {View, PickerProps, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {setFullWidth, setColor, inputStyles} from './input-styles';

interface Options {
  label: string;
  value: any;
}

interface StyleProps {
  color?: 'primary' | 'secondary';
  fullwidth?: boolean;
}

interface OwnProps {
  options: Options[];
  palceholder?: string;
}

type Props = OwnProps & PickerProps & StyleProps;

export function SelectInput(props: Props) {
  const {options, fullwidth, color, ...otherProps} = props;

  const renderPlaceholder = () => {
    if (props.selectedValue === '' && props.palceholder !== undefined)
      return props.palceholder;
    return '';
  };

  return (
    <View
      style={[
        {...setFullWidth(fullwidth)},
        {...setColor(color)},
        inputStyles.selectRootStyles,
      ]}>
      <Picker
        itemStyle={inputStyles.selectPickerItemStyles}
        style={inputStyles.selectPickerStyles}
        {...otherProps}>
        {options.map((item, index) => {
          return (
            <Picker.Item key={index} label={item.label} value={item.value} />
          );
        })}
      </Picker>
      <View style={inputStyles.selectPlaceholdBackground}>
        <Text style={[inputStyles.selectPlacehold, setColor(color)]}>
          {renderPlaceholder()}
        </Text>
      </View>
    </View>
  );
}
