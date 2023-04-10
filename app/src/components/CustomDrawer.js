import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {appColor} from '../consts/colors';
import {fontFamily} from '../consts/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LogoBlack from '../assets/images/LogoBlack.svg';
import LogoutIcon from '../assets/images/LogoutIcon.svg';
import {useNavigation} from '@react-navigation/native';
export default function CustomDrawer() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.contentContainer}>
        <LogoBlack width={200} height={200} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AccountDetails')}
        style={styles.contentContainer2}>
        <Text style={styles.textStyle}>Account Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer2}>
        <Text style={styles.textStyle}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('UpdatePassword')}
        style={styles.contentContainer2}>
        <Text style={styles.textStyle}>Update Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyRightSwipes')}
        style={styles.contentContainer2}>
        <Text style={styles.textStyle}>My Right Swipes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer2}>
        <Text style={styles.textStyle}>My Matches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer2}>
        <Text style={styles.textStyle}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer2}>
        <Text style={styles.textStyle}>Terms & Conditions</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer3}>
        <TouchableOpacity style={styles.button}>
          <LogoutIcon style={styles.imageStyle} />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
  },
  contentContainer2: {
    marginLeft: wp('10%'),
    marginTop: hp('-2%'),
    marginVertical: hp('4.3%'),
  },
  textStyle: {
    color: appColor.black,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.8%'),
  },
  button: {
    width: wp('59%'),
    height: hp('6.5%'),
    backgroundColor: appColor.pink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: hp('2%'),
    flexDirection: 'row',
  },
  text: {
    color: appColor.white,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('2.2%'),
  },
  imageStyle: {
    marginRight: wp('2.5%'),
  },
  contentContainer3: {
    alignItems: 'center',
    marginTop: hp('20%'),
  },
});
