import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 //Screens
 import Onboarding from './app/src/views/screens/Onboarding/Onboarding';
 import OnboardingOne from './app/src/views/screens/OnboardingOne/OnboardingOne';
 import OnboardingTwo from './app/src/views/screens/OnboardingTwo/OnboardingTwo';
import SignIn from './app/src/views/screens/SignIn/SignIn';
import ForgetPassword from './app/src/views/screens/ForgetPassword/ForgetPassword';
import Verification from './app/src/views/screens/Verification/Verification';
import ResetPassword from './app/src/views/screens/ResetPassword/ResetPassword';
import SignUp from './app/src/views/screens/SignUp/SignUp';
import AboutYourself1 from './app/src/views/screens/AboutYourself1/AboutYourself1';
import AboutYourself2 from './app/src/views/screens/AboutYourself2/AboutYourself2';
import AboutYourself3 from './app/src/views/screens/AboutYourself3/AboutYourself3';
import AboutYourself4 from './app/src/views/screens/AboutYourself4/AboutYourself4';
import AboutYourself5 from './app/src/views/screens/AboutYourself5/AboutYourself5';
import AboutYourself6 from './app/src/views/screens/AboutYourself6/AboutYourself6';
import AboutYourself7 from './app/src/views/screens/AboutYourself7/AboutYourself7';
function App(): JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{animationEnabled: false}}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingOne"
        component={OnboardingOne}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingTwo"
        component={OnboardingTwo}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AboutYourself1"
        component={AboutYourself1}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AboutYourself2"
        component={AboutYourself2}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AboutYourself3"
        component={AboutYourself3}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AboutYourself4"
        component={AboutYourself4}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="AboutYourself5"
        component={AboutYourself5}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AboutYourself6"
        component={AboutYourself6}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AboutYourself7"
        component={AboutYourself7}
        options={{headerShown: false}}
      />

  
      
      
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
