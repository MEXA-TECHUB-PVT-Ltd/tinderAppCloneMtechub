import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import VideoCallicon from '../../../assets/images/VideoCallicon.svg';
import VoiceIcon from '../../../assets/images/VoiceIcon.svg';
import Reciever from '../../../assets/images/Reciever.svg';
export default function VideoCall() {
  return (
    <View style={styles.Container}>
      <Image source={require('../../../assets/images/VideoCallu1.png')} />
      <Image
        source={require('../../../assets/images/VideoCallu2.png')}
        style={styles.imageStyle}
      />
      <View style={styles.contentContainer}>
        <VoiceIcon/>
        <Reciever/>
        <VideoCallicon/>
      </View>
    </View>
  );
}
