import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {appColor} from '../consts/colors';
import {fontFamily} from '../consts/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Forward from '../assets/images/Forward.svg';
export default function RightButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
      <Forward style={styles.imageStyle} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColor.pink,
    width: wp('26%'),
    height: hp('6%'),
    flexDirection: 'row',
    borderRadius: 25,
  },
  text: {
    color: appColor.white,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.8%'),
  },
  imageStyle: {
    marginLeft: wp('2%'),
  },
});
