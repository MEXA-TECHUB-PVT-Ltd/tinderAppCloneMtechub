import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import styles from './styles';
import {appColor} from '../../../consts/colors';
import {useNavigation} from '@react-navigation/native';
import SearchIcon from '../../../assets/images/SearchIcon.svg';
import {ScrollView} from 'react-native-gesture-handler';

export default function Discover() {
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
      <Header title="Discover" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentView}>
          <View style={styles.TextInput}>
            <SearchIcon style={styles.imageStyle} />
            <TextInput
              style={styles.TextinputStyle}
              placeholder="Search here"
              placeholderTextColor={appColor.greyDark}
            />
          </View>
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
      </ScrollView>
    </View>
  );
}
