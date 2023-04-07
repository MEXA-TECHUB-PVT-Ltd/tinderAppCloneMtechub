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
import {appColor} from './app/src/consts/colors';
import { fontFamily } from './app/src/consts/fonts';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Images
import Home from './app/src/assets/images/Home.svg';
import DotIcon from './app/src/assets/images/DotIcon.svg';
import ChatIcon from './app/src/assets/images/ChatIcon.svg';
import DiscoverIcon from './app/src/assets/images/DiscoverIcon.svg';
import NotificationIcon from './app/src/assets/images/NotificationIcon.svg';
import UserIcon from './app/src/assets/images/UserIcon.svg';
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
import Dashboard from './app/src/views/screens/Dashboard/Dashboard';
import ChatList from './app/src/views/screens/ChatList/ChatList';
import Discover from './app/src/views/screens/Discover/Discover';
import Notifications from './app/src/views/screens/Notifications/Notifications';
import Profile from './app/src/views/screens/Profile/Profile';
import Chat from './app/src/views/screens/Chat/Chat';
import ProfileDetails from './app/src/views/screens/ProfileDetails/ProfileDetails';
import ApplyFilter from './app/src/views/screens/ApplyFilter/ApplyFilter';
import CreatePost from './app/src/views/screens/CreatePost/CreatePost';

function App(): JSX.Element {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: hp('8%'),
            width: wp('100%'),
            borderTopWidth: 1,
            borderTopColor: appColor.grey,
          },
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Text style={styles.label}>Home</Text>
                  <DotIcon />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Home />
                </View>
              ),
          }}
          name="Dashboard"
          component={Dashboard}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Text style={styles.label}>Chat</Text>
                  <DotIcon />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <ChatIcon />
                </View>
              ),
          }}
          name="ChatList"
          component={ChatList}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Text style={styles.label}>Discover</Text>
                  <DotIcon />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <DiscoverIcon />
                </View>
              ),
          }}
          name="Discover"
          component={Discover}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                 <Text style={styles.label}>Notification</Text>
                  <DotIcon />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <NotificationIcon />
                </View>
              ),
          }}
          name="Notifications"
          component={Notifications}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Text style={styles.label}>Profile</Text>
                  <DotIcon />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <UserIcon/>
                </View>
              ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    );
  }
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
      <Stack.Screen
          name="UserDashboard"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ApplyFilter"
          component={ApplyFilter}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{headerShown: false}}
        />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  label:{
   color:appColor.pink,
   fontSize:hp('1.5%'),
   fontFamily:fontFamily.fontMedium
  },
});

export default App;
