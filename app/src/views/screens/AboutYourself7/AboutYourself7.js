import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../../assets/images/LogoWhite.svg';
import BackIcon from '../../../assets/images/BackIcon.svg';
import CustomButton from '../../../components/CustomButton';
import TextInputCustom2 from '../../../components/TextInputCustom2';
export default function AboutYourself7() {
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
          <Text style={styles.textStyle}>Tell us About Yourself</Text>
          <View style={styles.contentContainer}>
            <View style={styles.contentContainer2}>
              <TextInputCustom2 placeholder="Bio" />
            </View>
            <View style={styles.contentContainer3}>
              <CustomButton
                title="Continue"
                customClick={() => navigation.navigate('AboutYourself7')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
