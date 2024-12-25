import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import { Images } from '../../assets';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigator/StackNavigation';

type SplashScreenProps = {
  navigation:StackNavigationProp<StackParamList, 'SplashScreen'>};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}:any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TutorialScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image
        source={{uri:Images.splash}}
        style={styles.splashlogo}/>
    </View>
  );
};
export default SplashScreen;
