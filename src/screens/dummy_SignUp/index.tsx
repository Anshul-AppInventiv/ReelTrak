/* eslint-disable @typescript-eslint/no-unused-vars */
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
import React, {useReducer, useState} from 'react';
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
import {formReducer, initialState} from './formReducer';

interface SignUpProps {
  onClose?: any;
  navigation: any;
}

const Dummy = ({navigation}: SignUpProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);

  const {t} = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const [state, dispatch] = useReducer(formReducer, initialState);
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
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleImage = () => {
    setIsChecked(!isChecked);
  };
  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
    setPickerVisible(false);
  };

  const handleInputChange = (field: string, value: string) => {
    dispatch({type: 'SET_INPUT', field, value});

    switch (field) {
      case 'email':
        dispatch({type: 'SET_ERROR', field: 'emailError', value: value !== '' && !validateEmail(value)});
        break;
        case 'firstName':
          dispatch({type: 'SET_ERROR', field: 'firstNameError', value: value !== '' && !validateName(value)});
          break;
        case 'lastName':
          dispatch({type: 'SET_ERROR', field: 'lastNameError', value: value !== '' && !validateName(value)});
          break;
    }
  };

  const handleNext = () => {
    if (!error) {
      navigation.navigate('SignUpVerify', {phoneNumber});
    }
  };

  const isButtonDisabled =
    phoneNumber.length < 5 ||
    state.firstNameError ||
    state.lastNameError ||
    state.emailError ||
    !isChecked ||
    !validateName(state.firstName) ||
    !validateName(state.lastName) ||
    !validateEmail(state.email);
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
            name={state.firstName}
            label={t('signUp.firstNameLabel')}
            maxLength={25}
            keyboardType={'name-phone-pad'}
            onChangeText={(name: string) => handleInputChange('firstName', name)}
            Icon={Icons.user}
            Error={state.firstNameError}
            errorText={t('signUp.error.name')}
          />

          <CustomInputBox
            name={state.lastName}
            label={t('signUp.lastNameLabel')}
            maxLength={25}
            keyboardType="name-phone-pad"
            onChangeText={(name: string) => handleInputChange('lastName', name)}
            Icon={Icons.user}
            Error={state.lastNameError}
            errorText={t('signUp.error.name')}
          />

          <CustomInputBox
            name={state.email}
            label={t('signUp.emailLabel')}
            maxLength={50}
            keyboardType={'email-address'}
            onChangeText={(name: string) => handleInputChange('email', name)}
            Icon={Icons.email}
            Error={state.emailError}
            errorText={t('signUp.error.email')}
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
            errorText={t('signUp.error.mobile')}
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

export default Dummy;
