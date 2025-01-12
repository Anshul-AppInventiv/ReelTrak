import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  useColorScheme,
} from 'react-native';
import {Styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useTranslation} from 'react-i18next';
import {Icons} from '../../assets';

interface ProfileProps {
  navigation: StackNavigationProp<StackParamList>;
}

const Profile = ({navigation}: ProfileProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);
  const {t} = useTranslation();
  const [imageUri, setImageUri] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };
  const handleContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
      }
    });
    refRBSheet.current.close();
  };
  const handleTakePhoto = () => {
    refRBSheet.current.close();
    launchCamera({mediaType: 'photo', quality: 1}, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  const handleRemove = () => {
    refRBSheet.current.close();
    setImageUri('');
  };

  const refRBSheet = useRef<any>();

  const handleMoreOption = () => {
    refRBSheet.current.open();
  };

  const handleSkip = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Image source={Icons.back} style={styles.Left} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>{t('profile.header.skip')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentHeader}>
          <Text style={styles.headerText}>{t('profile.header.title')}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailText}>{t('profile.detailText')}</Text>
        </View>
        <ScrollView>
          <View style={styles.profileSection}>
            <Image
              style={styles.profileImage}
              source={imageUri ? {uri: imageUri} : Icons.accountDark}
            />
            <View style={styles.addImgContainer}>
              <TouchableOpacity
                style={styles.addButton}
                onPress={handleMoreOption}>
                <Image source={Icons.add} style={styles.addImg} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={imageUri ? styles.submitButton : styles.disabledButton}
          activeOpacity={0.7}
          onPress={handleContinue}
          disabled={!imageUri}>
          <Text
            style={
              imageUri ? styles.submitButtonText : styles.disabledButtonText
            }>
            {t('profile.button.continue')}
          </Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask
        useNativeDriver={false}
        draggable={true}
        height={Dimensions.get('window').height / 3.0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#E5E5E5',
            width: '12%',
          },
          container: {
            borderRadius: 20,
            marginTop: 'auto',
          },
        }}>
        <View>
          <TouchableOpacity style={styles.container2} onPress={openGallery}>
            <View style={styles.container1}>
              <Image source={Icons.gallery} style={styles.iconImageSize} />
              <View style={styles.textArrange}>
                <Text style={styles.name}>
                  {t('profile.button.uploadFromGallery')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container2} onPress={handleTakePhoto}>
            <View style={styles.container1}>
              <Image source={Icons.camera} style={styles.iconImageSize} />
              <View style={styles.textArrange}>
                <Text style={styles.name}>
                  {t('profile.button.openCamera')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container2} onPress={handleRemove}>
            <View style={styles.container1}>
              <Image source={Icons.delete} style={styles.iconImageSize} />
              <View style={styles.textArrange}>
                <Text style={styles.name}>
                  {t('profile.button.removeIcon')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};
export default Profile;
