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
export default function MyRightSwipes() {
  const navigation = useNavigation();
  const Posts = [
    {
      id: 1,
      image: require('../../../assets/images/Post1.png'),
      name: 'Lorem Ipsum',
    },
    {
      id: 2,
      image: require('../../../assets/images/Post2.png'),
      name: 'Lorem Ipsum',
    },
    {
      id: 3,
      image: require('../../../assets/images/Post3.png'),
      name: 'Lorem Ipsum',
    },
    {
      id: 4,
      image: require('../../../assets/images/Post4.png'),
      name: 'Lorem Ipsum',
    },
    {
      id: 5,
      image: require('../../../assets/images/Post5.png'),
      name: 'Lorem Ipsum',
    },
    {
      id: 6,
      image: require('../../../assets/images/Post6.png'),
      name: 'Lorem Ipsum',
    },
    {
      id: 7,
      image: require('../../../assets/images/Post3.png'),
      name: 'Lorem Ipsum',
    },
    {
      id: 8,
      image: require('../../../assets/images/Post2.png'),
      name: 'Lorem Ipsum',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.textStyle}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <Header1 title="My Right Swipes" />
      <View style={styles.listView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Posts}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
