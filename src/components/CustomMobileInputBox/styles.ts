import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';

export const styles = StyleSheet.create({
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
  errorContainer: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: vh(10),
    textAlign: 'left',
  },
});
