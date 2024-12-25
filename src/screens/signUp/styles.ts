import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    paddingVertical: vh(35),
    paddingHorizontal: vw(20),
  },
  contentHeader: {},
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailTextContainer: {
    marginTop: vh(10),
  },
  detailText: {
    fontSize: 15,
    color: 'gray',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(24),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    width: '100%',
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
  iconStyle: {
    width: vw(20),
    height: vw(20),
    tintColor: 'grey',
    resizeMode: 'contain',
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagContainer: {},
  countryCodeText: {
    fontSize: 16,
  },
  phoneInput: {
    width: '80%',
    fontSize: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    fontWeight: '500',
  },
  phoneInputMobile: {
    width: '67%',
    fontSize: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    fontWeight: '500',
  },
  consentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: vh(15),
    paddingRight: vw(24),
  },
  consentText: {
    lineHeight: vh(19),
    fontSize: 15,
    marginLeft: vw(10),
    color: 'gray',
  },
  uncheckedImg: {
    width: vw(18),
    height: vw(18),
    resizeMode: 'contain',
  },
  disabledButton: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  submitButton: {
    backgroundColor: '#486284',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '85%',
    marginTop: vh(44),
    paddingVertical: vh(16),
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButtonText: {
    color: '#E2E2E2',
  },
  loginContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vh(100),
  },
  accountText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
  },
  loginText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3797EF',
  },
});
