import {Image, StatusBar, View} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../assets';
import {styles} from './styles';
import CustomModal from '../../components/CustomModal';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';

interface LoginProps {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
}

const Login = ({navigation}: LoginProps) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
          translucent={true}
        />
        <Image source={{uri: Images.login}} style={styles.bcgImg} />
      </View>

      <CustomModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        navigation={navigation}
      />
    </>
  );
};

export default Login;
