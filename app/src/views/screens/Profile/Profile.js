import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import AddImage from '../../../assets/images/AddImage.svg';
export default function Profile() {
  const navigation = useNavigation();
  const Posts = [
    {
      id: 1,
      image: require('../../../assets/images/Image1.png'),
    },
    {
      id: 2,
      image: require('../../../assets/images/Image2.png'),
    },
    {
      id: 3,
      image: require('../../../assets/images/Image3.png'),
    },
    {
      id: 4,
      image: require('../../../assets/images/Image4.png'),
    },
    {
      id: 5,
      image: require('../../../assets/images/Image5.png'),
    },
    {
      id: 6,
      image: require('../../../assets/images/Image6.png'),
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.contentContainer3}>
            <Text style={styles.textStyle}>Profile</Text>
          </View>
        </View>
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
        <View style={styles.contentContainer2}>
          <Text style={styles.textStyle5}>My Posts</Text>
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
      <TouchableOpacity style={styles.button}>
        <AddImage />
      </TouchableOpacity>
    </View>
  );
}
