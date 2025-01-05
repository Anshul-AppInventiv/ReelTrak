import {Platform, StyleSheet} from 'react-native';
import {vw, vh, SCREEN_HEIGHT} from '../../utils/dimension';
export const Styles =(theme:any)=>
   StyleSheet.create({
  safeareastyle: {
    flex: 1,
    backgroundColor: theme === 'dark' ? '#000' : '#FFF',
  },
  subContainer: {
    marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
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
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    marginTop: vh(15),
    marginBottom: vh(8),
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
  listContainer: {
    flex: 1,
    paddingHorizontal: vw(20),
    marginTop: vh(14),
  },
  emptyList: {
    height: SCREEN_HEIGHT / 1.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh(4),
  },
  checkbox: {
    paddingVertical: vh(10),
  },
  leftText: {
    marginLeft: vw(8),
    fontSize: 18,
    color: theme === 'dark' ? '#FFF' : '#000',
  },
  checkedText: {
    fontWeight: 'bold',
    color: '#486284',
  },
  checkedBox: {
    width: vw(24),
    height: vw(24),
    backgroundColor: '#486284',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  tick: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  uncheckedBox: {
    width: vw(24),
    height: vw(24),
    borderWidth: 2,
    borderColor: '#e8eced',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  footer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh(14),
  },
  submitButton: {
    backgroundColor: '#486284',
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
