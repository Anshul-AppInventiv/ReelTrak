import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Icons} from '../../assets';
import {styles} from './styles';
import CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import CustomMobileInputBox from '../CustomMobileInputBox';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';

interface CustomModalProps {
  visible: boolean;
  onClose: any;
  navigation?: StackNavigationProp<StackParamList>;
}
const CustomModal = ({
  visible = false,
  onClose,
  navigation,
}: CustomModalProps) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [callingCode, setCallingCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [error, setError] = useState(false);

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
    setPickerVisible(false);
  };
  const handleNext = () => {
    if (!error) {
      onClose();
      if (navigation) {
        navigation.reset(
          {
            index: 0,
            routes: [{name: 'Verifyotp'}],
          },
          {phoneNumber},
        );
      }
    }
  };
  const handleSignUp = () => {
    onClose();
    if (navigation) {
      navigation.reset({
        index: 0,
        routes: [{name: 'SignUp'}],
      });
    }
  };

  const isButtonDisabled = phoneNumber.length < 5;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.subContainer}>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>Welcome to ReelTrak</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>
                  Enter your mobile number and we will text you a verification
                  code
                </Text>
              </View>

              <CustomMobileInputBox
                countryCode={countryCode}
                callingCode={callingCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                onSelect={onSelect}
                setPickerVisible={setPickerVisible}
                telephoneIcon={Icons.telephone}
                flagContainerStyle={styles.flagContainer}
                countryCodeTextStyle={styles.countryCodeText}
                phoneInputStyle={styles.phoneInput}
                inputContainerStyle={styles.inputContainer}
                error={error}
                setError={setError}
                errorText="Mobile no. should be min 5 digit and max 13 digit."
              />

              <TouchableOpacity
                style={[
                  styles.submitButton,
                  isButtonDisabled && styles.disabledButton,
                ]}
                onPress={handleNext}
                activeOpacity={0.7}
                disabled={isButtonDisabled}>
                <Text
                  style={[
                    styles.submitButtonText,
                    isButtonDisabled && styles.disabledButtonText,
                  ]}>
                  Next
                </Text>
              </TouchableOpacity>

              {isPickerVisible && (
                <CountryPicker
                  countryCode={countryCode}
                  withFilter={true}
                  withFlag={true}
                  withCallingCode={true}
                  onSelect={onSelect}
                  onClose={() => setPickerVisible(false)}
                  visible={isPickerVisible}
                />
              )}
            </View>
            <View style={styles.signUpContainer}>
              <Text style={styles.newAccountText}>Don't have an account?</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signupText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default CustomModal;
