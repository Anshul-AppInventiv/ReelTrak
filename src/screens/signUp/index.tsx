import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import CustomMobileInputBox from '../../components/CustomMobileInputBox';
import CustomInputBox from '../../components/CustomInput';
import {validateEmail, validateName} from '../../utils/validations';
import {Icons} from '../../assets';

interface SignUpProps {
  onClose?: any;
  navigation: any;
}

const SignUp = ({navigation}: SignUpProps) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [callingCode, setCallingCode] = useState('+1');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const toggleImage = () => {
    setIsChecked(!isChecked);
  };
  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
    setPickerVisible(false);
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text === '') {
      setEmailError(false);
    } else if (validateEmail(text)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleFirstNameChange = (text: string) => {
    setFirstName(text);
    if (text === '') {
      setFirstNameError(false);
    } else if (validateName(text)) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
  };

  const handleLastNameChange = (text: string) => {
    setLastName(text);
    if (text === '') {
      setLastNameError(false);
    } else if (validateName(text)) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
  };

  const handleNext = () => {
    if (!error) {
      navigation.navigate('SignUpVerify', {phoneNumber});
    }
  };

  const isButtonDisabled =
    phoneNumber.length < 5 ||
    firstNameError ||
    lastNameError ||
    emailError ||
    !isChecked ||
    !validateName(firstName) ||
    !validateName(lastName) ||
    !validateEmail(email);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
          translucent={true}
        />
        <View style={styles.subContainer}>
          <View style={styles.contentHeader}>
            <Text style={styles.headerText}>Create Your Account</Text>
          </View>
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailText}>
              Get started by filling in your details below
            </Text>
          </View>

          <CustomInputBox
            name={firstName}
            label="First Name"
            maxLength={25}
            keyboardType={'name-phone-pad'}
            onChangeText={handleFirstNameChange}
            iconStyle={styles.iconStyle}
            setName={setFirstName}
            Icon={Icons.user}
            InputStyle={styles.phoneInput}
            inputContainerStyle={styles.inputContainer}
            Error={firstNameError}
            setError={setFirstNameError}
            errorText={
              'Please use only alphabetical letters and minimum length is 3 characters.'
            }
          />

          <CustomInputBox
            name={lastName}
            label="Last Name"
            maxLength={25}
            keyboardType="name-phone-pad"
            onChangeText={handleLastNameChange}
            iconStyle={styles.iconStyle}
            setName={setLastName}
            Icon={Icons.user}
            InputStyle={styles.phoneInput}
            inputContainerStyle={styles.inputContainer}
            Error={lastNameError}
            setError={setLastNameError}
            errorText={
              'Please use only alphabetical letters and minimum length is 3 characters.'
            }
          />

          <CustomInputBox
            name={email}
            label="Email Address"
            maxLength={50}
            keyboardType={'email-address'}
            onChangeText={handleEmailChange}
            setName={setEmail}
            Icon={Icons.email}
            iconStyle={styles.iconStyle}
            InputStyle={styles.phoneInput}
            inputContainerStyle={styles.inputContainer}
            Error={emailError}
            setError={setEmailError}
            errorText={'Please enter valid email'}
          />

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
            phoneInputStyle={styles.phoneInputMobile}
            inputContainerStyle={styles.inputContainer}
            error={error}
            setError={setError}
            errorText="Mobile no. should be min 5 digit and max 13 digit."
          />
          <View style={styles.consentContainer}>
            <TouchableOpacity onPress={toggleImage}>
              <Image
                source={isChecked ? Icons.checked : Icons.unchecked}
                style={styles.uncheckedImg}
              />
            </TouchableOpacity>

            <Text style={styles.consentText}>
              By accepting, you agree to our Privacy Policy and Terms of Use
            </Text>
          </View>
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
        <View style={styles.loginContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              })
            }>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
