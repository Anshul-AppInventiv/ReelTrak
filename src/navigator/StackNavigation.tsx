import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import SplashScreen from '../screens/splash';
import Login from '../screens/login';
import TutorialScreen from '../screens/tutorial';
import Verifyotp from '../screens/verifyotp';
import SignUp from '../screens/signUp';
import SignUpVerify from '../screens/signUpVerify';
import Details from '../screens/details';
import Studio from '../screens/studio';
import Profile from '../screens/profile';
import FilterScreen from '../screens/filterScreen';
import Home from '../screens/home';
import {useColorScheme} from 'react-native';
import Dummy from '../screens/dummy_SignUp';

export type StackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  TutorialScreen: undefined;
  Verifyotp: undefined;
  SignUp: undefined;
  SignUpVerify: undefined;
  Details: undefined;
  Studio: undefined;
  Profile: undefined;
  FilterScreen: undefined;
  Home: undefined;
  Dummy:undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpVerify" component={SignUpVerify} />
        <Stack.Screen name="Verifyotp" component={Verifyotp} />
        <Stack.Screen name="Studio" component={Studio} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dummy" component={Dummy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
