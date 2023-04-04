import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import DotedLine from '../../../assets/images/DotedLine.svg';
import MatchUsers from '../../../assets/images/MatchUsers.svg';
import Activeline from '../../../assets/images/Activeline.svg';
import InActiveline from '../../../assets/images/InActiveline.svg';
import LeftButton from '../../../components/LeftButton';
import RightButton from '../../../components/RightButton';
import {useNavigation} from '@react-navigation/native';

export default function Onboarding() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <DotedLine width={410} style={styles.imageStyle} />
      <View style={styles.contentContainer}>
        <MatchUsers width={280} height={300} style={styles.imageStyle2} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textStyle}>Find your Best Match</Text>
        <View style={styles.contentContainer2}>
          <Text style={styles.textStyle2} numberOfLines={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta
            lorem mollis aliquam ut. Sem viverra aliquet eget sit amet tellus
            cras adipiscing. Est velit egestas dui id ornare arcu. Libero justo
            laoreet sit amet cursus sit amet dictum sit.
          </Text>
        </View>
        <View style={styles.contentContainer3}>
          <Activeline style={styles.imageStyle3} />
          <InActiveline style={styles.imageStyle3} />
        </View>
      </View>

      <View style={styles.contentContainer4}>
        <View>
          <LeftButton title="Back" />
        </View>

        <RightButton
          title="Next"
          customClick={() => navigation.navigate('OnboardingOne')}
        />
      </View>
    </View>
  );
}
