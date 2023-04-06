import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {appColor} from '../consts/colors';
import {fontFamily} from '../consts/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    height: hp('7.5%'),
    backgroundColor: appColor.pink,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: appColor.white,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('2.4%'),
  },
});
