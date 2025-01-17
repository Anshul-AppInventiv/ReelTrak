/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {Icons} from '../../assets';
import {Styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';
import {useTranslation} from 'react-i18next';

interface SignUpVerifyProps {
  navigation: StackNavigationProp<StackParamList>;
}

const SignUpVerify = ({navigation}: SignUpVerifyProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);
  const [code, setCode] = useState(['', '', '', '']);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [timer, setTimer] = useState(30);
  const {t} = useTranslation();

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const handleInputChange = (text: string, index: number) => {
    if (/^[0-9]$/.test(text) || text === '') {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      if (text !== '' && index < 3) {
        inputRefs[index + 1].current?.focus();
      }

      if (text === '' && index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  const handleVerify = () => {
    const otp = code.join('');
    if (attempts >= 5) {
      setError(
        'You have reached the maximum attempts. Please retry in 5 minutes.',
      );
    } else {
      if (otp.length !== 4) {
        setError('Please enter a 4-digit code.');
      } else if (otp === '1234') {
        navigation.reset({
          index: 0,
          routes: [{name: 'Details'}],
        });
      } else {
        setAttempts(attempts + 1);
        setError('Wrong OTP entered');
      }
    }
  };
  const handleBack = () => {
    navigation.goBack();
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Image source={Icons.back} style={styles.Left} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('otpVerification.title')}</Text>
          <Text style={styles.subtitle}>{t('otpVerification.subtitle')}</Text>
          <Text style={styles.mobileText}>****1234</Text>
        </View>
        <View style={styles.otpContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              onFocus={() => handleFocus(index)}
              placeholder="0"
              cursorColor={'#000'}
              placeholderTextColor={'gray'}
              value={digit}
              onChangeText={text => handleInputChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              style={[
                styles.otpInput,
                {
                  borderColor: error
                    ? 'red'
                    : focusedIndex === index
                    ? '#486284'
                    : '#E1E1E1',
                },
              ]}
            />
          ))}
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          onPress={handleVerify}
          style={styles.button}
          activeOpacity={0.7}>
          <Text style={styles.buttonText}>{t('otpVerification.verify')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.newAccountText}>
          {t('otpVerification.resend.prompt')}
        </Text>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Code Resent',
              'A new code has been sent to your phone number.',
            )
          }
          disabled={timer > 0}>
          <Text
            style={[
              styles.resendText,
              {color: timer > 0 ? '#B0BCC9' : '#486284'},
            ]}>
            {t('otpVerification.resend.resendText')}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          00:{timer < 10 ? `0${timer}` : timer}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpVerify;
