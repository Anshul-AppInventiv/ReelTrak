/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {Icons} from '../../assets';
import {studioData} from '../../utils/data';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';

interface StudioProps {
  navigation: StackNavigationProp<StackParamList>;
}

const Studio = ({navigation}: StudioProps) => {
  const numColumns = 3;
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(studioData);
  const [selectedItem, setSelectedItem] = useState('');


  const handleContinue = () => {
    navigation.replace('FilterScreen');
  };
  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (searchText === '') {
      setFilteredData(studioData);
    } else {
      const filtered = studioData.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  }, [searchText]);

  const handleItemPress = (id: string) => {
    setSelectedItem(id);
  };


  const renderFlatList = () => {
    return (
      <>
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailText}> Please select your department</Text>
        </View>

        <View style={styles.inputContainer}>
          <Image source={Icons.search} style={styles.searchIcon} />
          <TextInput
            placeholder="Search department..."
            placeholderTextColor={'gray'}
            style={styles.inputText}
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            numColumns={numColumns}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleItemPress(item.id)}>
                <View  style={[
                        styles.itemContainer,
                        {
                          borderColor:
                            selectedItem === item.id ? '#486284' : 'white',
                          borderWidth: 2,
                        },
                      ]}>
                  <Image source={item.image} style={styles.listImg} />
                  {selectedItem === item.id ? (
                        <View style={[styles.absolute,{backgroundColor:'rgba(0,0,0,0.3)'}]}>
                          <Text style={styles.tick}>✓</Text>
                        </View>
                      ) : null}
                  <View style={styles.listTextContainer}>
                    <Text style={styles.listText}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyListContainer}>
                <Text style={styles.emptyListText}>No studios found</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.7}
            onPress={handleContinue}>
            <Text style={styles.submitButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Image source={Icons.back} style={styles.Left} />
        </TouchableOpacity>
        <View style={styles.contentHeader}>
          <Text style={styles.headerText}>Help us to know you more</Text>
        </View>
        <View style={styles.flatListContainer}>{renderFlatList()}</View>
      </View>
    </SafeAreaView>
  );
};

export default Studio;
