import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {appColor} from '../consts/colors';
import {fontFamily} from '../consts/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Eye from '../assets/images/Eye.svg';

export default function CustomTextInput(props) {
  return (
    <View style={styles.TextInput}>
      <TextInput
        style={styles.TextinputStyle}
        placeholder={props.placeholder}
        placeholderTextColor={appColor.greyDark}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        // style={props.style}
        blurOnSubmit={false}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
      />
      <TouchableOpacity onPress={props.customClick}>
        <Eye />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  TextInput: {
    width: wp('85%'), // 80% of width device screen}
    height: hp('7%'),
    backgroundColor: '#ffffff',
    borderColor: appColor.border,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },
  TextinputStyle: {
    marginLeft: wp('2%'),
    fontFamily: fontFamily.fontRegular,
    width: wp('73%'),
    color: appColor.greyDark,
  },
});
