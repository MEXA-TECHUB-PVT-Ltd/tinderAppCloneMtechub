import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../../assets/images/LogoWhite.svg';
import BackIcon from '../../../assets/images/BackIcon.svg';
import TextInputCustom from '../../../components/TextInputCustom';
import CustomButton from '../../../components/CustomButton';
export default function ForgetPassword() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#FD397F', '#FF675D']} style={styles.Container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon style={styles.imageStyle2} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <LogoWhite style={styles.imageStyle} />
        </View>
        <View style={styles.card}>
          <Text style={styles.textStyle}>Forget Password</Text>
          <View style={styles.contentContainer}>
            <View style={styles.contentContainer2}>
              <TextInputCustom placeholder="Email Address" />
            </View>
            <View style={styles.contentContainer3}>
              <CustomButton title="Send Code" />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
