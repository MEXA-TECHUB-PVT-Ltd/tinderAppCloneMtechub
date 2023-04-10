import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CelebrationHearts from '../../../assets/images/CelebrationHearts.svg';
import BackIcon from '../../../assets/images/BackIcon.svg';
import HeartIcon from '../../../assets/images/HeartIcon.svg';
import CustomButton3 from '../../../components/CustomButton3';
export default function Match() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#FD397F', '#FF675D']} style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon style={styles.imageStyle} />
      </TouchableOpacity>
      <View style={styles.contentView}>
        <CelebrationHearts style={styles.imageStyle2} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textStyle}>It's Match</Text>
        <Image
          source={require('../../../assets/images/Emoji.png')}
          resizeMode="contain"
          style={styles.imageStyle3}
        />
      </View>
      <Text style={styles.textStyle2}>
        Lorem ipsum dolor sit amet, consetetur{' '}
      </Text>
      <View style={styles.contentContainer2}>
        <View style={styles.imageView}>
          <Image
            source={require('../../../assets/images/Match1.png')}
            resizeMode="contain"
            style={styles.imageStyle5}
          />
        </View>
        <View style={styles.imageView}>
          <Image
            source={require('../../../assets/images/Match2.png')}
            resizeMode="contain"
            style={styles.imageStyle5}
          />
        </View>
        <HeartIcon style={styles.imageStyle4} />
      </View>
      <View style={styles.contentView}>
        <CustomButton3 title="Message Her!" />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textStyle3}>Keep Swiping</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
