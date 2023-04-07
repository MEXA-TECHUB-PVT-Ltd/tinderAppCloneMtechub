import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import {TabBar} from 'react-native-tab-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import BackWhite from '../../../assets/images/BackWhite.svg';
import {useNavigation} from '@react-navigation/native';
import {appColor} from '../../../consts/colors';
import {fontFamily} from '../../../consts/fonts';
import TextInputCustom from '../../../components/TextInputCustom';
import CustomTextInput2 from '../../../components/CustomTextInput2';
import CustomButton1 from '../../../components/CustomButton1';
import CustomButton2 from '../../../components/CustomButton2';
import {ScrollView} from 'react-native-gesture-handler';
import FarAway from '../../../assets/images/FarAway.svg';

export default function ApplyFilter() {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Cemetery Search'},
    {key: 'second', title: 'Advanced Search'},
    {key: 'third', title: '1D Search'},
  ]);
  const Posts = [
    {
      id: 1,
      image: require('../../../assets/images/Post1.png'),
      name: 'Lorem Ipsum',
      distance: '7.4km',
    },
    {
      id: 2,
      image: require('../../../assets/images/Post2.png'),
      name: 'Lorem Ipsum',
      distance: '6km',
    },
    {
      id: 3,
      image: require('../../../assets/images/Post3.png'),
      name: 'Lorem Ipsum',
      distance: '44km',
    },
    {
      id: 4,
      image: require('../../../assets/images/Post4.png'),
      name: 'Lorem Ipsum',
      distance: '24km',
    },
    {
      id: 5,
      image: require('../../../assets/images/Post5.png'),
      name: 'Lorem Ipsum',
      distance: '24km',
    },
    {
      id: 6,
      image: require('../../../assets/images/Post6.png'),
      name: 'Lorem Ipsum',
      distance: '14km',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.textStyle2}>{item.name}</Text>
        <View style={styles.contentContainer4}>
          <FarAway style={styles.imageStyle} />
          <Text style={styles.textStyle3}>{item.distance}</Text>
        </View>
      </View>
    );
  };
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: appColor.pink,
        width: wp('22%'),
        marginLeft: wp('5%'),
        marginBottom: wp('3%'),
      }}
      style={{
        backgroundColor: '#ffffff',
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: 0,
        shadowRadius: 0,
      }}
      tabStyle={{elevation: 0, shadowOpacity: 0}}
      activeColor={appColor.pink}
      labelStyle={{color: appColor.grey}}
      pressColor="#fff"
      renderLabel={({route, color}) => (
        <Text
          style={{
            color,
            margin: 10,
            fontSize: hp('1.7%'),
            fontFamily: fontFamily.fontMedium,
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  const FirstRoute = () => (
    <View style={styles.contentView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <CustomTextInput2 placeholder="Gender" />
        <TextInputCustom placeholder="Enter Distance" />
        <View style={styles.buttonsView}>
          <CustomButton2 title="Cancel" />
          <CustomButton1 title="Apply" />
        </View>
      </ScrollView>
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.contentView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <TextInputCustom placeholder="Last Time Logged In" />
        <TextInputCustom placeholder="Height" />
        <TextInputCustom placeholder="Annual Income" />
        <TextInputCustom placeholder="Occupation" />
        <TextInputCustom placeholder="Company Name" />
        <TextInputCustom placeholder="Academic Qualification" />
        <TextInputCustom placeholder="Graduated University" />
        <CustomTextInput2 placeholder="Constellation" />
        <CustomTextInput2 placeholder="Emotional State" />
        <TextInputCustom placeholder="Children" />
        <CustomTextInput2 placeholder="Do you Drink" />
        <CustomTextInput2 placeholder="Do you Smoke" />
        <View style={styles.buttonsView1}>
          <CustomButton2 title="Cancel" />
          <CustomButton1 title="Apply" />
        </View>
      </ScrollView>
    </View>
  );
  const ThirdRoute = () => (
    <View style={styles.contentView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Posts}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonsView2}>
        <CustomButton2 title="Cancel" />
        <CustomButton1 title="Apply" />
      </View>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  return (
    <View style={styles.Container}>
      <View style={styles.contentContainer3}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackWhite />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Apply Filter</Text>
      </View>
      <View style={styles.tabView}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{width: Dimensions.get('window').width}}
        />
      </View>
    </View>
  );
}
