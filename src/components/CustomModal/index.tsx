import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  useColorScheme,
} from 'react-native';
import {Icons} from '../../assets';
import {Styles} from './styles';
import CustomMobileInputBox from '../CustomMobileInputBox';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import {StackParamList} from '../../navigator/StackNavigation';
import CustomButton from '../CustomButton';

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
  const theme = useColorScheme();
  const styles = Styles(theme);
  const {t} = useTranslation();
  const [countryCode, setCountryCode] = useState('US');
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
        navigation.reset({
          index: 0,
          routes: [{name: 'Verifyotp'}],
        });
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
                <Text style={styles.headerText}>{t('login.title')}</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>{t('login.subTitle')}</Text>
              </View>

              <CustomMobileInputBox
                label={t('login.phoneLabel')}
                countryCode={countryCode}
                callingCode={callingCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                onSelect={onSelect}
                setPickerVisible={setPickerVisible}
                Icon={Icons.telephone}
                error={error}
                setError={setError}
                errorText={t('login.mobileError')}
              />
              <CustomButton
                title={t('signUp.nextButton')}
                onPress={handleNext}
                isButtonDisabled={isButtonDisabled}
              />

            </View>
            <View style={styles.signUpContainer}>
              <Text style={styles.newAccountText}>
                {t('login.signUpPrompt')}
              </Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signupText}> {t('login.signUp')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default CustomModal;
