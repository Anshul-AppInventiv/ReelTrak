import {StyleSheet} from 'react-native';
import {vw, vh, SCREEN_HEIGHT} from '../../utils/dimension';
import {Colors} from '../../utils/colors';
export const Styles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#000' : '#F4F4F4',
    },
    subContainer: {
      marginTop: vh(20),
      paddingHorizontal: vw(20),
    },
    backButton: {
      width: vw(40),
      height: vw(40),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E7E7E7',
      borderRadius: 50,
    },
    Left: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    contentHeader: {
      marginTop: vh(20),
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#FFF' : '#000',
    },
    detailTextContainer: {
      marginTop: vh(10),
      paddingRight: vw(10),
    },
    detailText: {
      fontSize: 15,
      fontWeight: '400',
      color: 'gray',
    },
    choiceContainer: {
      width: '100%',
      marginTop: vh(16),
      flexDirection: 'row',
      paddingVertical: vh(10),
      justifyContent: 'space-between',
    },
    Button: {
      paddingVertical: vw(8),
      paddingHorizontal: vw(18),
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 30,
    },
    selectedButton: {
      paddingVertical: vw(8),
      paddingHorizontal: vw(20),
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: '#486284',
      borderRadius: 30,
    },
    buttonText: {
      fontSize: 14,
      color: 'gray',
      fontWeight: '500',
    },
    selectedButtonText: {
      fontSize: 14,
      color: 'white',
      fontWeight: '400',
    },
    inputContainer: {
      flexDirection: 'row',
      borderWidth: 2,
      marginTop: vh(15),
      alignItems: 'center',
      borderColor: '#E2E2E2',
      borderRadius: 12,
      paddingHorizontal: vw(10),
    },
    searchIcon: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    inputText: {
      color: theme === 'dark' ? '#FFF' : '#000',
      width: '93%',
      height: vh(40),
      marginLeft: vw(4),
      fontSize: 15,
    },
    flatListContainer: {},
    listContainer: {
      alignItems: 'center',
      marginTop: vh(10),
    },
    emptyListContainer: {
      height: SCREEN_HEIGHT / 2.4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyListText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'gray',
    },
    itemContainer: {
      width: vw(90),
      height: vh(100),
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#FFF',
      borderRadius: 30,
      marginTop: vh(10),
      marginHorizontal: vw(8),
      paddingHorizontal: vh(8),
      paddingVertical: vh(10),
    },
    listImg: {
      width: vw(50),
      height: vw(50),
      resizeMode: 'contain',
    },
    absolute: {
      position: 'absolute',
      height: vw(50),
      width: vw(50),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
      top: vh(10),
    },
    tick: {
      fontSize: 26,
      color: '#fff',
      fontWeight: 'bold',
    },
    listTextContainer: {
      width: vw(73),
      alignItems: 'center',
      justifyContent: 'center',
    },
    listText: {
      textAlign: 'center',
    },
    footer: {
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: vh(24),
    },
    submitButton: {
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '85%',
      paddingVertical: vh(16),
      borderRadius: 10,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
