import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../../assets/images/LogoWhite.svg';
import BackIcon from '../../../assets/images/BackIcon.svg';
import TextInputCustom from '../../../components/TextInputCustom';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
export default function ResetPassword() {
  const navigation = useNavigation();
  const [Show, setShow] = useState(false);
  const [Visible, setVisible] = useState(true);
  const [ShowConfirm, setShowConfirm] = useState(false);
  const [ConfirmVisible, setConfirmVisible] = useState(true);
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  return (
    <LinearGradient colors={['#FD397F', '#FF675D']} style={styles.Container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.contentContainer}>
          <LogoWhite style={styles.imageStyle} />
        </View>
        <View style={styles.card}>
          <Text style={styles.textStyle}>Reset Password</Text>
          <View style={styles.contentContainer}>
            <View style={styles.contentContainer2}>
              <CustomTextInput
                placeholder="New Password"
                customClick={() => {
                  setVisible(!Visible), setShow(!Show);
                }}
                secureTextEntry={Visible}
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
              <CustomButton
                title="Reset Password"
                customClick={() => navigation.navigate('SignIn')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
