import {
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Header1 from '../../../components/Header1';
export default function AccountDetails() {
  return (
    <View style={styles.Container}>
      <Header1 title="Account Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Image
              source={require('../../../assets/images/User.png')}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </View>
          <Text style={styles.textStyle2}>John Doe</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>First Name</Text>
          <Text style={styles.textStyle4}>Lorem ipsum</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Last Name</Text>
          <Text style={styles.textStyle4}>Lorem ipsum</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Email Address</Text>
          <Text style={styles.textStyle4}>example@gmail.com</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Height</Text>
          <Text style={styles.textStyle4}>173 cm</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Gender</Text>
          <Text style={styles.textStyle4}>Male</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Gender</Text>
          <Text style={styles.textStyle4}>Male</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>I am...</Text>
          <Text style={styles.textStyle4}>Profession here</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>I like...</Text>
          <Text style={styles.textStyle4}>Basket ball,Movie,Book</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>I like...</Text>
          <Text style={styles.textStyle4}>Basket ball,Movie,Book</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Date of Birth</Text>
          <Text style={styles.textStyle4}>19/09/1999</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Location</Text>
          <Text style={styles.textStyle4}>Kha Chi Secondary School</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Qualification</Text>
          <Text style={styles.textStyle4}>Bsc Business</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Graduated University</Text>
          <Text style={styles.textStyle4}>University name here</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Do you smoke?</Text>
          <Text style={styles.textStyle4}>No</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Do you drink?</Text>
          <Text style={styles.textStyle4}>Yes</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Constellation</Text>
          <Text style={styles.textStyle4}>Lorem ipsum</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Annual Income</Text>
          <Text style={styles.textStyle4}>00,000</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>Children</Text>
          <Text style={styles.textStyle4}>Nill</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.textStyle3}>I appreciate when my date</Text>
          <Text style={styles.textStyle4}>Lorem ipsum</Text>
        </View>
        <View style={styles.itemView2}>
          <Text style={styles.textStyle3}>Bio</Text>
          <Text style={styles.textStyle4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
