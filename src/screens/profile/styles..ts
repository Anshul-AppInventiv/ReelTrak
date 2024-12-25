import {Platform, StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(15),
    marginVertical: vw(10),
  },
  subContainer: {
    paddingHorizontal: vw(20),
    marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  skipText: {
    fontSize: 16,
    color: '#486284',
    fontWeight: 'bold',
  },
  contentHeader: {
    marginTop: vh(30),
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailTextContainer: {
    marginTop: vh(14),
  },
  detailText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'gray',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: vh(40),
    marginBottom: vh(20),
  },
  profileImage: {
    width: vw(120),
    height: vw(120),
    borderRadius: 100,
    marginBottom: vh(8),
  },
  addImgContainer: {
    position: 'absolute',
    bottom: 15,
    right: 120,
    backgroundColor: 'white',
    padding: vw(2),
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: '#486284',
    borderRadius: 20,
    padding: vw(3),
  },
  addImg: {
    width: vw(24),
    height: vw(24),
    tintColor: 'white',
    resizeMode: 'contain',
  },
  bgColor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  marginSide: {
    marginHorizontal: vw(20),
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    height: vw(27),
    width: vw(27),
  },
  iconImageSize: {
    height: vw(26),
    width: vw(30),
    resizeMode: 'contain',
    borderRadius: 15,
    marginHorizontal: vw(10),
  },
  textArrange: {
    justifyContent: 'center',
  },
  name: {
    marginEnd: vh(10),
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  comments: {
    marginEnd: vh(10),
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  time: {
    fontSize: 16,
    fontWeight: '500',
    color: '#DCDCDC',
  },
  submitButton: {
    backgroundColor: '#486284',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '85%',
    paddingVertical: vh(15),
    marginTop: vh(14),
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '85%',
    paddingVertical: vh(15),
    marginTop: vh(14),
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  disabledButtonText: {
    color: '#E2E2E2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
