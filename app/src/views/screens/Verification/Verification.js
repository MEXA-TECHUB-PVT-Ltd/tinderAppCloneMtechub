import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../../assets/images/LogoWhite.svg';
import BackIcon from '../../../assets/images/BackIcon.svg';
import TextInputCustom from '../../../components/TextInputCustom';
import CustomButton from '../../../components/CustomButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
export default function Verification() {
  const navigation = useNavigation();
  const [Otp, setOtp] = useState();
  const [Success, setSuccess] = useState(false);
  return (
    <LinearGradient colors={['#FD397F', '#FF675D']} style={styles.Container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.contentContainer}>
          <LogoWhite style={styles.imageStyle} />
        </View>
        <View style={styles.card}>
          <Text style={styles.textStyle}>Verification</Text>
          <View style={styles.contentContainer}>
            <View style={styles.TextInputView}>
              <OTPInputView
                style={styles.TextinputStyle}
                pinCount={4}
                code={Otp}
                onCodeChanged={code => {
                  setOtp(code);
                }}
                autoFocusOnLoad={true}
                codeInputFieldStyle={styles.underlineStyleBase}
              />
            </View>
            <View style={styles.contentContainer3}>
              <CustomButton
                title="Verify"
                customClick={() => navigation.navigate('Verification')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
