/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
} from 'react-native';
import CountryPicker, {
  Country,
} from 'react-native-country-picker-modal';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';

interface CustomMobileInputBoxProps {
  countryCode?: any;
  callingCode?: string;
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  onSelect?: (country: Country) => void;
  setPickerVisible?: any;
  telephoneIcon: ImageSourcePropType;
  flagContainerStyle?: ViewStyle;
  countryCodeTextStyle?: TextStyle;
  phoneInputStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
  error: boolean;
  setError: (hasError: boolean) => void;
  errorText?: string;
}

const CustomMobileInputBox = ({
  countryCode,
  callingCode,
  phoneNumber,
  setPhoneNumber,
  onSelect,
  setPickerVisible,
  telephoneIcon,
  flagContainerStyle,
  countryCodeTextStyle,
  phoneInputStyle,
  inputContainerStyle,
  error,
  setError,
  errorText,
}: CustomMobileInputBoxProps) => {
  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{5,13}$/;
    return phoneRegex.test(number);
  };
  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    if (text === '') {
      setError(false);
    } else if (validatePhoneNumber(text)) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <View style={[inputContainerStyle, error ? styles.errorContainer : null]}>
        <TouchableOpacity activeOpacity={1} style={styles.telephoneButton}>
          <Image source={telephoneIcon} style={styles.telephoneImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.countryCodeButton}
          activeOpacity={1}
          onPress={() => setPickerVisible(setPickerVisible)}>
          <CountryPicker
            countryCode={countryCode}
            withFlag={true}
            withCallingCode={true}
            withFilter={true}
            onSelect={onSelect}
            visible={false}
            containerButtonStyle={flagContainerStyle}
          />
          <Text
            onPress={() => setPickerVisible(setPickerVisible)}
            style={countryCodeTextStyle}>
            {callingCode}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={phoneInputStyle}
          label={'Mobile number'}
          keyboardType="phone-pad"
          maxLength={13}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
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
      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomMobileInputBox;
