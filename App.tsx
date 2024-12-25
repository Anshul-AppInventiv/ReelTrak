/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigator/StackNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StackNavigation />
    </View>
  );
};

export default App;
