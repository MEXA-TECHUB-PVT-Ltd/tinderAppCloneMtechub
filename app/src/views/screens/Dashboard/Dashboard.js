import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './styles';
import {appColor} from '../../../consts/colors';
import Swiper from 'react-native-deck-swiper';
import {useNavigation} from '@react-navigation/native';

import HeartsBackground from '../../../assets/images/HeartsBackground.svg';
import Menu from '../../../assets/images/Menu.svg';
import Filter from '../../../assets/images/Filter.svg';
import RightSwipeIcon from '../../../assets/images/RightSwipeIcon.svg';
import LeftSwipeIcon from '../../../assets/images/LeftSwipeIcon.svg';
import SwipeUser from '../../../assets/images/SwipeUser.svg';
import LeftSwipe from '../../../assets/images/LeftSwipe.svg';
import RightSwipe from '../../../assets/images/RightSwipe.svg';
import AddFavourite from '../../../assets/images/AddFavourite.svg';
import Rewind from '../../../assets/images/Rewind.svg';
import Next from '../../../assets/images/Next.svg';
import FarAway from '../../../assets/images/FarAway.svg';

export default function Dashboard() {
  const navigation = useNavigation();
  const swiperRef = useRef();
  const [cardIndex, setCardIndex] = useState(0);

  const Card = item => {
    return (
      <View style={styles.Swipercard}>
        <View style={styles.cardimageView}>
          <SwipeUser width={380} height={380} style={styles.imageStyle2} />
        </View>
        <View style={styles.contentContainer}>
          <TouchableOpacity>
            <LeftSwipe width={120} height={120} />
          </TouchableOpacity>
          <TouchableOpacity>
            <RightSwipe width={120} height={120} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AddFavourite width={120} height={120} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Rewind width={120} height={120} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer2}>
          <View style={styles.contentContainer5}>
            <View style={styles.contentContainer4}>
              <Text style={styles.textStyle3}>John Doe</Text>
              <Text style={styles.textStyle2}>,24</Text>
            </View>
            <View style={styles.contentContainer3}>
              <FarAway />
              <Text style={styles.textStyle4}>7km</Text>
            </View>
          </View>
          <View style={styles.contentContainer4}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileDetails')}>
              <Next />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Menu />
          </TouchableOpacity>
          <Text style={styles.textStyle}>Home</Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate('ApplyFilter')}
          >
            <Filter />
          </TouchableOpacity>
        </View>
        <HeartsBackground style={styles.imageStyle} />
        <View style={styles.swiperView}>
          <Swiper
            //cards={CardsList}
            cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
            animateOverlayLabelsOpacity
            // stackScale={6}
            ref={swiperRef}
            swipeAnimationDuration={300}
            cardIndex={cardIndex}
            renderCard={item => Card(item)}
            overlayLabels={{
              left: {
                element: (
                  <View style={styles.element}>
                    <LeftSwipeIcon />
                  </View>
                ),
              },
              right: {
                element: (
                  <View style={styles.element}>
                    <RightSwipeIcon />
                  </View>
                ),
              },
            }}
            verticalSwipe={false}
            // onSwiped={cardIndex => {
            //   console.log(cardIndex);
            // }}

            onSwiped={cardIndex => {
              setCardIndex(cardIndex + 1);
              // FromRoutes();
              //  console.log('Swiped');
              swiperRef.current.state.pan.setOffset({x: 0, y: 0});
              //  console.log('THE LIST AFTER SWIPING===========', CardsList);
            }}
            onSwipedRight={cardIndex => {
              // let arr = CardsList.filter((item, index) => {
              //   return index == cardIndex;
              // });
              // RightSwipeApi(arr);
              // setSwipedUser(arr);
              // setProcessing(false);
            }}
            onSwipedLeft={cardIndex => {
              // let arr = CardsList.filter((item, index) => {
              //   return index == cardIndex;
              // });
              // LeftSwipeApi(arr);
              // setSwipedUser(arr);
              // setProcessing(false);
            }}
            //onSwipedAll={() => {console.log('onSwipedAll')}}
            showSecondCard={true}
            // backgroundColor={'#4FD0E9'}
            stackSize={4}></Swiper>
        </View>
      </View>
    </View>
  );
}
