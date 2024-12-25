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
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {Icons} from '../../assets';
import {studioData} from '../../utils/data';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';

interface DetailsProps {
  navigation: StackNavigationProp<StackParamList>;
}

const Details = ({navigation}: DetailsProps) => {
  const [selected, setSelected] = useState(0);
  const numColumns = 3;
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(studioData);
  const [selectedItem, setSelectedItem] = useState('');

  const handleContinue = () => {
    navigation.navigate('Studio');
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
    if (selected === 1) {
      return (
        <View style={{flex: 1}}>
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListHeaderComponent={
              <View style={{paddingHorizontal: 20}}>
                <View style={styles.detailTextContainer}>
                  <Text style={styles.detailText}>
                    Please select the studio you work for
                  </Text>
                </View>

                <View style={styles.inputContainer}>
                  <Image source={Icons.search} style={styles.searchIcon} />
                  <TextInput
                    placeholder="Search studio..."
                    placeholderTextColor={'gray'}
                    style={styles.inputText}
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                  />
                </View>
              </View>
            }
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleItemPress(item.id)}>
                <View
                  style={[
                    styles.itemContainer,
                    {
                      borderColor:
                        selectedItem === item.id ? '#486284' : 'white',
                      borderWidth: 2,
                    },
                  ]}>
                  <Image source={item.image} style={styles.listImg} />
                  {selectedItem === item.id ? (
                    <View
                      style={[
                        styles.absolute,
                        {backgroundColor: 'rgba(0,0,0,0.3)'},
                      ]}>
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
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
          translucent={true}
        />
        <View style={styles.subContainer}>
          <View style={styles.contentHeader}>
            <Text style={styles.headerText}>Help us to know you more</Text>
          </View>
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailText}>
              Please indicate whether you are employed by a studio, production
              company, or are a freelance worker.
            </Text>
          </View>
          <View style={styles.choiceContainer}>
            <TouchableOpacity
              style={[
                styles.Button,
                selected === 1 ? styles.selectedButton : null,
              ]}
              onPress={() => setSelected(1)}>
              <Text
                style={[
                  styles.buttonText,
                  selected === 1 ? styles.selectedButtonText : null,
                ]}>
                Studio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.Button,
                selected === 2 ? styles.selectedButton : null,
              ]}
              onPress={() => setSelected(2)}>
              <Text
                style={[
                  styles.buttonText,
                  selected === 2 ? styles.selectedButtonText : null,
                ]}>
                Production Co.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.Button,
                selected === 3 ? styles.selectedButton : null,
              ]}
              onPress={() => setSelected(3)}>
              <Text
                style={[
                  styles.buttonText,
                  selected === 3 ? styles.selectedButtonText : null,
                ]}>
                Freelance
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flatListContainer}>{renderFlatList()}</View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleContinue}
            activeOpacity={0.7}>
            <Text style={styles.submitButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Details;
