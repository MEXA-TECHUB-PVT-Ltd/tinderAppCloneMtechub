import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import styles from './styles';
import {fontFamily} from '../../../consts/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
export default function ChatList() {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: 'User Name',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      image: require('../../../assets/images/ProfilePicture.png'),
      time: '03:00 pm',
      status: 'unread',
    },
    {
      id: 2,
      name: 'User Name',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      image: require('../../../assets/images/ProfilePicture-1.png'),
      time: '01:00 pm',
      status: 'read',
    },
    {
      id: 3,
      name: 'User Name',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      image: require('../../../assets/images/ProfilePicture-2.png'),
      time: '09:32 am',
      status: 'read',
    },
    {
      id: 4,
      name: 'User Name',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      image: require('../../../assets/images/ProfilePicture-3.png'),
      time: 'Yesterday',
      status: 'read',
    },
    {
      id: 5,
      name: 'User Name',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      image: require('../../../assets/images/ProfilePicture-4.png'),
      time: '02/04',
      status: 'read',
    },
    {
      id: 6,
      name: 'User Name',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      image: require('../../../assets/images/ProfilePicture-5.png'),
      time: '02/04',
      status: 'read',
    },
    {
      id: 7,
      name: 'User Name',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      image: require('../../../assets/images/ProfilePicture-6.png'),
      time: '01/04',
      status: 'read',
    },
  ];
  const renderItemList = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Chat')}
          style={styles.itemContainer01}>
          <View style={styles.imageContainer}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.itemContent}>
            <View style={styles.content1}>
              {item.status === 'unread' ? (
                <Text
                  style={[
                    styles.textStyle2,
                    {fontFamily: fontFamily.fontMedium},
                  ]}>
                  {item.name}
                </Text>
              ) : (
                <Text style={styles.textStyle2}>{item.name}</Text>
              )}
              <Text style={styles.textStyle3}>{item.time}</Text>
            </View>
            <View>
              {item.status === 'unread' ? (
                <Text
                  style={[
                    styles.textStyle4,
                    {fontFamily: fontFamily.fontRegular, fontSize: hp('1.5%')},
                  ]}
                  numberOfLines={2}>
                  {item.message}
                </Text>
              ) : (
                <Text style={styles.textStyle4} numberOfLines={2}>
                  {item.message}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}></View>
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <Header title="Chats" />
      <View style={styles.listView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItemList}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
