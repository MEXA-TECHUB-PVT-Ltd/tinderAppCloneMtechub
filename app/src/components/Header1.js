import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {appColor} from '../consts/colors';
import {fontFamily} from '../consts/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackIcon from '../assets/images/BackIcon.svg';
import {useNavigation} from '@react-navigation/native';
export default function Header1(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon style={styles.imageStyle2} />
      </TouchableOpacity>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    height: hp('7.5%'),
    backgroundColor: appColor.pink,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: appColor.white,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('2.3%'),
    marginLeft: wp('18%'),
  },
  imageStyle2: {
    marginLeft: hp('1%'),
  },
});
