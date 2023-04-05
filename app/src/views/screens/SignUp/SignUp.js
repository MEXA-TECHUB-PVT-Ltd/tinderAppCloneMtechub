import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../../assets/images/LogoWhite.svg';
import BackIcon from '../../../assets/images/BackIcon.svg';
import FacebookBorder from '../../../assets/images/FacebookBorder.svg';
import Google from '../../../assets/images/Google.svg';
import TextInputCustom from '../../../components/TextInputCustom';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';

export default function SignUp() {
  const navigation = useNavigation();
  const [Show, setShow] = useState(false);
  const [Visible, setVisible] = useState(true);
  const [ShowConfirm, setShowConfirm] = useState(false);
  const [ConfirmVisible, setConfirmVisible] = useState(true);
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
          <Text style={styles.textStyle}>Create Account</Text>
          <View style={styles.contentContainer}>
            <View style={styles.contentContainer2}>
              <TextInputCustom placeholder="Username" />
              <TextInputCustom placeholder="Email Address" />
              <CustomTextInput
                placeholder="Password"
                secureTextEntry={Visible}
                customClick={() => {
                  setVisible(!Visible);
                  setShow(!Show);
                }}
              />
              <CustomTextInput
                placeholder="Confirm Password"
                customClick={() => {
                  setConfirmVisible(!ConfirmVisible);
                  setShowConfirm(!ShowConfirm);
                }}
                secureTextEntry={ConfirmVisible}
              />
            </View>
            <View style={styles.contentContainer3}>
              <CustomButton title="Sign Up" />
            </View>
            <View style={styles.bottomView}>
              <Text style={styles.textStyle2}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textStyle3}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
