import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
  I18nManager,
} from 'react-native';

import React, {useState} from 'react';
import {Styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CountryCode} from 'react-native-country-picker-modal';
import CustomMobileInputBox from '../../components/CustomMobileInputBox';
import CustomInputBox from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import LanguageModal from '../../components/LanguageModal';
import {validateEmail, validateName} from '../../utils/validations';
import {useTranslation} from 'react-i18next';
import i18n from '../../locales/i18n';
import {Icons} from '../../assets';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SignUpProps {
  onClose?: any;
  navigation: any;
}

const SignUp = ({navigation}: SignUpProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);

  const {t} = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const [languages, setLanguages] = useState([
    {code: 'English', name: 'English'},
    {code: 'Spanish', name: 'Español'},
    {code: 'Hindi', name: 'हिंदी'},
    {code: 'French', name: 'Français'},
    {code: 'Russian', name: 'Русский'},
    {code: 'Urdu', name: 'اردو'},
  ]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // const changeLanguage = (langCode: string | undefined) => {
  //   const isRTL = ['Urdu'].includes(langCode || '');
  //   I18nManager.forceRTL(isRTL);

  //   if (!isRTL) {
  //     I18nManager.forceRTL(false);
  //   }

  //   i18n.changeLanguage(langCode);
  //   RNRestart.Restart();
  //   toggleModal();
  // };

  const changeLanguage = async (langCode: string | undefined) => {
    const rtlLanguages = ['Urdu'];
    const isRTL = rtlLanguages.includes(langCode || '');

    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);

      await AsyncStorage.setItem('i18n-locale', langCode || '');
      await AsyncStorage.setItem('i18n-rtl', isRTL.toString());

      RNRestart.Restart();
    } else {
      i18n.changeLanguage(langCode);
      toggleModal();
    }
  };
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
            <Text style={styles.headerText}>{t('signUp.title')}</Text>
          </View>
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailText}>{t('signUp.subTitle')}</Text>
          </View>

          <CustomInputBox
            name={firstName}
            label={t('signUp.firstNameLabel')}
            maxLength={25}
            keyboardType={'name-phone-pad'}
            onChangeText={handleFirstNameChange}
            setName={setFirstName}
            Icon={Icons.user}
            Error={firstNameError}
            setError={setFirstNameError}
            errorText={
              t('signUp.error.name')
            }
          />

          <CustomInputBox
            name={lastName}
            label={t('signUp.lastNameLabel')}
            maxLength={25}
            keyboardType="name-phone-pad"
            onChangeText={handleLastNameChange}
            setName={setLastName}
            Icon={Icons.user}
            Error={lastNameError}
            setError={setLastNameError}
            errorText={
              t('signUp.error.name')
            }
          />

          <CustomInputBox
            name={email}
            label={t('signUp.emailLabel')}
            maxLength={50}
            keyboardType={'email-address'}
            onChangeText={handleEmailChange}
            setName={setEmail}
            Icon={Icons.email}
            Error={emailError}
            setError={setEmailError}
            errorText={
              t('signUp.error.email')
            }
          />

          <CustomMobileInputBox
            label={t('signUp.phoneLabel')}
            countryCode={countryCode}
            callingCode={callingCode}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            onSelect={onSelect}
            setPickerVisible={setPickerVisible}
            Icon={Icons.telephone}
            error={error}
            setError={setError}
            errorText={
              t('signUp.error.mobile')
            }
          />
          <View style={styles.consentContainer}>
            <TouchableOpacity
              onPress={toggleImage}
              style={styles.consentButton}>
              <Image
                source={isChecked ? Icons.checked : Icons.unchecked}
                style={styles.uncheckedImg}
              />
            </TouchableOpacity>

            <Text style={styles.consentText}>{t('signUp.privacyPolicy')}</Text>
          </View>
          <CustomButton
            title={t('signUp.nextButton')}
            onPress={handleNext}
            isButtonDisabled={isButtonDisabled}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.accountText}>{t('signUp.alreadyAccount')}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              })
            }>
            <Text style={styles.loginText}>{t('signUp.login')}</Text>
          </TouchableOpacity>
        </View>
        <LanguageModal
          modalVisible={modalVisible}
          toggleModal={toggleModal}
          title="Select Language"
          languages={languages}
          changeLanguage={changeLanguage}
        />

        <TouchableOpacity onPress={toggleModal} style={styles.languageButton}>
          <Text style={styles.languageText}>{i18n.language}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
