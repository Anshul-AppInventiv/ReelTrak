/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {vw} from '../../utils/dimension';

interface CustomInputProps {
  name: any;
  setName: (text: string) => void;
  Icon: ImageSourcePropType;
  InputStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
  Error?: boolean;
  label: string;
  setError?: (hasError: boolean) => void;
  onChangeText: any;
  onFocus?: any;
  iconStyle: any;
  onBlur?: any;
  errorText?: any;
  maxLength?: any;
  keyboardType: any;
}

const CustomInputBox = ({
  name,
  label,
  Icon,
  InputStyle,
  inputContainerStyle,
  Error,
  onChangeText,
  iconStyle,
  errorText,
  maxLength,
  keyboardType,
}: CustomInputProps) => {
  return (
    <>
      <View style={[inputContainerStyle, Error ? styles.errorContainer : null]}>
        <TouchableOpacity activeOpacity={1} style={styles.telephoneButton}>
          <Image source={Icon} style={iconStyle} />
        </TouchableOpacity>
        <TextInput
          style={InputStyle}
          label={label}
          keyboardType={keyboardType}
          value={name}
          maxLength={maxLength}
          onChangeText={onChangeText}
          mode="flat"
          underlineStyle={{
            display: 'none',
          }}
          theme={{
            colors: {
              primary: 'gray',
              placeholder: 'grey',
              background: 'transparent',
              disabled: 'transparent',
            },
          }}
        />
      </View>
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomInputBox;
const styles = StyleSheet.create({
  telephoneButton: {
    paddingHorizontal: vw(14),
    borderColor: '#ccc',
    borderRightWidth: 1,
    marginRight: vw(4),
  },

  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorContainer: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: vw(10),
    textAlign: 'left',
  },
});
