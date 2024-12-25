import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {Icons} from '../../assets';
import {styles} from './styles';
import CheckBox from 'react-native-check-box';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';

interface FilterScreenProps {
  navigation: StackNavigationProp<StackParamList>;
}

const FilterScreen = ({navigation}: FilterScreenProps) => {
  const itemsArray = [
    {id: 1, title: 'Manager'},
    {id: 2, title: 'Screenwriter'},
    {id: 3, title: 'Director of Photography'},
    {id: 4, title: 'Production Manager'},
    {id: 5, title: 'Production Coordinator'},
    {id: 6, title: 'Production Assistant'},
    {id: 7, title: 'Location Manager'},
    {id: 8, title: 'Production Designer'},
    {id: 9, title: 'Art Director'},
    {id: 10, title: 'Set Designer'},
    {id: 11, title: 'Set Designer'},
    {id: 12, title: 'Set Designer'},
  ];

  const [searchText, setSearchText] = useState('');
  const [checkedItems, setCheckedItems] = useState(
    new Array(itemsArray.length).fill(false),
  );

  const filteredItems = itemsArray.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleBack = () => {
    navigation.goBack();
  };
  const handleCheckboxToggle = (index: any) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleContinue = () => {
    navigation.navigate('Profile');
  };

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => handleCheckboxToggle(index)}
      style={styles.item}>
      <CheckBox
        style={styles.checkbox}
        onClick={() => handleCheckboxToggle(index)}
        isChecked={checkedItems[index]}
        checkBoxColor={checkedItems[index] ? '#486284' : '#486284'}
        checkedImage={
          <View style={styles.checkedBox}>
            <Text style={styles.tick}>✓</Text>
          </View>
        }
        unCheckedImage={<View style={styles.uncheckedBox} />}
      />
      <Text
        style={[styles.leftText, checkedItems[index] && styles.checkedText]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeareastyle}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />

      <View style={styles.listContainer}>
        <FlatList
          data={filteredItems}
          alwaysBounceVertical
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <View style={styles.subContainer}>
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Image source={Icons.back} style={styles.Left} />
              </TouchableOpacity>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>Help us to know you more</Text>
              </View>
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailText}>
                  {' '}
                  Please select the studio you work for
                </Text>
              </View>

              <View style={styles.inputContainer}>
                <Image source={Icons.search} style={styles.searchIcon} />
                <TextInput
                  placeholder="Search studio..."
                  placeholderTextColor={'gray'}
                  keyboardType="default"
                  style={styles.inputText}
                  value={searchText}
                  onChangeText={text => setSearchText(text)}
                />
              </View>
            </View>
          }
          ListEmptyComponent={
            <View style={styles.emptyList}>
              <Text style={styles.emptyText}>No records found</Text>
            </View>
          }
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleContinue}
          activeOpacity={0.7}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
