import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, vw, vh} from '../../utils/dimension';
import { Colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: SCREEN_HEIGHT / 1.5,
    borderRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: vw(22),
    paddingBottom: vh(20),
  },
  subContainer: {
    paddingVertical: vh(35),
  },
  contentHeader: {},
  headerText: {
    fontSize: 24,
    fontWeight: '900',
  },
  detailTextContainer: {
    marginTop: vh(10),
  },
  detailText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'grey',
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
  telephoneButton: {
    paddingHorizontal: vw(14),
    borderColor: '#ccc',
    borderRightWidth: 1,
    marginRight: vw(4),
  },
  telephoneImg: {
    width: vw(20),
    height: vw(20),
    tintColor: 'grey',
    resizeMode: 'contain',
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagContainer: {
  },
  countryCodeText: {
    fontSize: 16,
  },
  phoneInput: {
    width: '65%',
    fontSize: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    fontWeight: '500',
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
    backgroundColor: Colors.primary,
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
  signUpContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vh(100),
  },
  newAccountText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
  },
  signupText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3797EF',
  },
});
