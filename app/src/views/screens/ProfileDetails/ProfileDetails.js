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
import BackWhite from '../../../assets/images/BackWhite.svg';
import Location from '../../../assets/images/Location.svg';
export default function ProfileDetails() {
  const navigation = useNavigation();
  const Posts = [
    {
      id: 1,
      image: require('../../../assets/images/Post1.png'),
    },
    {
      id: 2,
      image: require('../../../assets/images/Post2.png'),
    },
    {
      id: 3,
      image: require('../../../assets/images/Post3.png'),
    },
    {
      id: 4,
      image: require('../../../assets/images/Post4.png'),
    },
    {
      id: 5,
      image: require('../../../assets/images/Post5.png'),
    },
    {
      id: 6,
      image: require('../../../assets/images/Post6.png'),
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackWhite />
            </TouchableOpacity>
            <Text style={styles.textStyle}>Profile Details</Text>
          </View>
          <View style={styles.contentView}>
            <View style={styles.imageView}>
              <Image
                source={require('../../../assets/images/User.png')}
                resizeMode="cover"
                style={styles.imageStyle}
              />
            </View>
            <Text style={styles.textStyle2}>John Doe, 24</Text>
          </View>
          <View style={styles.contentView}>
            <View style={styles.contentContainer4}>
              <Location style={styles.imageStyle2} />
              <Text style={styles.textStyle3}>Lorem ipsum dolor sit amet,</Text>
            </View>
            <View style={styles.contentContainer5}>
              <Text style={styles.textStyle4} numberOfLines={2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer2}>
          <Text style={styles.textStyle5}>Posts</Text>
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
