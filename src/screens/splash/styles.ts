import {StyleSheet} from 'react-native';
import { SCREEN_WIDTH,SCREEN_HEIGHT } from '../../utils/dimension';
export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashlogo: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
