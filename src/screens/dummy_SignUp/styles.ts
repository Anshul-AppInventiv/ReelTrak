import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
import {Colors} from '../../utils/colors';

export const Styles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme === 'dark' ? Colors.Black : Colors.White,
    },
    subContainer: {
      paddingVertical: vh(35),
      paddingHorizontal: vw(20),
      // backgroundColor: 'red',
    },
    contentHeader: {},
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#FFF' : '#000',
    },
    detailTextContainer: {
      marginTop: vh(10),
      marginBottom: vh(10),
    },
    detailText: {
      fontSize: 15,
      color: 'gray',
    },
    focusedInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(24),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'red',
      width: '100%',
    },
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

    consentContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginTop: vh(15),
      paddingRight: vw(24),
    },
    consentButton: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme === 'dark' ? Colors.White : Colors.Black,
    },
    consentText: {
      lineHeight: vh(19),
      fontSize: 15,
      color: 'gray',
      marginLeft: vw(4),
    },
    uncheckedImg: {
      width: vw(18),
      height: vw(18),
      resizeMode: 'cover',
    },
    disabledButton: {
      backgroundColor: Colors.White,
      shadowColor: Colors.Black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
    },
    loginContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      // marginTop: vh(10),
    },
    accountText: {
      fontSize: 16,
      fontWeight: '400',
      color: 'grey',
    },
    loginText: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.blue,
    },
    languageButton: {
      width: '30%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: vh(20),
      padding: vw(8),
    },
    languageText: {
      fontSize: 16,
      fontWeight: '500',
      color: theme === 'dark' ? '#FFF' : '#000',
    },
  });
