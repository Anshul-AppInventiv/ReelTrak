import {StyleSheet} from 'react-native';
import {vw, vh, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../utils/dimension';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer:{
    alignItems:'center',
    backgroundColor:'#000',
    paddingVertical:vh(20),
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 1.6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: vh(10),
    textAlign:'center',
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '300',
    marginTop:vh(20),
    paddingHorizontal: vw(20),
    lineHeight:vh(20),
    textAlign:'center',
  },
  pagination: {
    flexDirection: 'row',
    marginTop:vh(20),
    marginBottom: vh(30),
  },
  dot: {
    width: vw(10),
    height: vw(10),
    borderRadius: 5,
    marginHorizontal: vw(5),
  },
  activeDot: {
    backgroundColor: '#486284',
  },
  inactiveDot: {
    backgroundColor: '#C8CFD6',
  },
  nextButton: {
    width:'75%',
    backgroundColor: '#486284',
    padding: vw(15),
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign:'center',
  },
  skipButton: {
    width:'16%',
    padding: vw(5),
    alignItems: 'center',
    marginTop: vh(15),
  },
  skipButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
