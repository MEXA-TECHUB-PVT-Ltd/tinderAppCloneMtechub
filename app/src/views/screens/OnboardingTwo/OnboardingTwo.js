import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LogoBlack from '../../../assets/images/LogoBlack.svg';
import Hearts from '../../../assets/images/Hearts.svg';
import Google from '../../../assets/images/Google.svg';
import Facebook from '../../../assets/images/Facebook.svg';
export default function OnboardingTwo() {
  return (
    <View style={styles.Container}>
      <View style={styles.contentContainer}>
        <LogoBlack style={styles.imageStyle} />
        <View style={styles.contentContainer2}>
          <Hearts height={500} width={380} style={styles.imageStyle2} />
        </View>
      </View>
      <View style={styles.contentContainer3}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.contentContainer4}>
            <Text style={styles.textStyle}>Create Your Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentContainer4}>
            <Text style={styles.textStyle}>Sign In to Your Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentContainer4}>
            <Google width={65} height={65} />
            <Text style={[styles.textStyle, {marginLeft: '-2%'}]}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentContainer4}>
            <Facebook width={28} height={28} style={styles.imageStyle3} />
            <Text style={[styles.textStyle, {marginLeft: '4%'}]}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
