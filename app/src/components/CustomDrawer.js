import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import React, {useState} from 'react';
import {appColor} from '../consts/colors';
import {fontFamily} from '../consts/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LogoBlack from '../assets/images/LogoBlack.svg';
import LogoutIcon from '../assets/images/LogoutIcon.svg';
import {useNavigation} from '@react-navigation/native';
import ExitImage from '../assets/images/ExitImage.svg';
export default function CustomDrawer() {
  const navigation = useNavigation();
  const [Logout, setLogout] = useState(false);
  return (
    <View>
      <Modal
        visible={Logout}
        transparent
        onRequestClose={() => setLogout(false)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_View}>
          <View style={styles.Logout_Modal}>
            <TouchableOpacity
              onPress={() => setLogout(false)}
              style={styles.exitView}>
              <ExitImage />
            </TouchableOpacity>
            <View style={styles.contentView}>
              <Text style={styles.textStyle4}>Confirmation</Text>
              <Text style={styles.textStyle6}>Do you want to Log out?</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonsView}>
                <TouchableOpacity
                  onPress={() => setLogout(false)}
                  style={styles.button1}>
                  <Text style={styles.button1Text}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setLogout(false), navigation.navigate('SignIn');
                  }}
                  style={styles.button2}>
                  <Text style={styles.button2Text}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.contentContainer}>
        <LogoBlack width={200} height={200} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AccountDetails')}
        style={styles.contentContainer2}>
        <Text style={styles.textStyle}>Account Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('UpdateProfile')}
        style={styles.contentContainer2}>
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
      <TouchableOpacity
        onPress={() => navigation.navigate('MyMatches')}
        style={styles.contentContainer2}>
        <Text style={styles.textStyle}>My Matches</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PrivacyPolicy')}
        style={styles.contentContainer2}>
        <Text style={styles.textStyle}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TermsandConditions')}
        style={styles.contentContainer2}>
        <Text style={styles.textStyle}>Terms & Conditions</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer3}>
        <TouchableOpacity onPress={() => setLogout(true)} style={styles.button}>
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
  centered_View: {
    flex: 1,
    backgroundColor: '#00000099',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logout_Modal: {
    width: wp('80%'),
    height: hp('30%'),
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
  },
  contentView: {
    alignItems: 'center',
  },
  imageStyle: {
    width: wp('50%'),
    height: hp('25%'),
  },
  textStyle4: {
    color: appColor.pink,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: hp('2.5%'),
    marginVertical: hp('5%'),
  },
  textStyle6: {
    color: appColor.black,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.7%'),
    marginBottom: '4%',
    marginTop: hp('-1%'),
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonsView: {
    width: wp('60%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button1: {
    width: wp('30%'),
    height: hp('6%'),
    backgroundColor: appColor.white,
    borderWidth: 1,
    borderColor: appColor.pink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: hp('1%'),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    marginHorizontal: '5%',
  },
  button1Text: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.pink,
    fontSize: hp('1.9%'),
    textAlign: 'center',
  },
  button2: {
    width: wp('30%'),
    height: hp('6%'),
    backgroundColor: appColor.pink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: hp('1%'),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    marginHorizontal: '5%',
  },
  button2Text: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.white,
    fontSize: hp('1.9%'),
    textAlign: 'center',
  },
  exitView: {
    position: 'absolute',
    marginVertical: '4%',
    marginLeft: wp('72%'),
  },
});
