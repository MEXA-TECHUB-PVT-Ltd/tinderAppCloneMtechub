import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import styles from './styles';
import {appColor} from '../../../consts/colors';
import {
  GiftedChat,
  Send,
  Bubble,
  Time,
  InputToolbar,
  Composer,
  SystemMessage,
  Actions,
  Avatar,
} from 'react-native-gifted-chat';
import {useNavigation} from '@react-navigation/native';
import BackImg from '../../../assets/images/BackImg.svg';
import Video from '../../../assets/images/Video.svg';
import Call from '../../../assets/images/Call.svg';
import SendIcon from '../../../assets/images/SendIcon.svg';
import ImageIcon from '../../../assets/images/ImageIcon.svg';
import Smile from '../../../assets/images/Smile.svg';
import {fontFamily} from '../../../consts/fonts';

export default function Chat() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [OpenModal, setOpenModal] = useState(false);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const CustomInputToolbar = props => {
    return (
      <View style={{marginTop: '11%'}}>
        <InputToolbar
          {...props}
          placeholder="Type your messages..."
          placeholderTextColor={appColor.pinkLight}
          containerStyle={{
            marginLeft: '5%',
            backgroundColor: appColor.pinkfaded,
            height: 55,
            width: '90%',
            shadowRadius: 0,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    );
  };
  const CustomBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={styles.bubbleTextStyle}
        wrapperStyle={styles.wrapperStyle}
      />
    );
  };
  const SendComponent = props => {
    return (
      <Send
        {...props}
        containerStyle={{
          borderWidth: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SendIcon />
      </Send>
    );
  };
  const CustomTime = props => {
    return (
      <View style={{position: 'relative'}}>
        <Time
          {...props}
          timeTextStyle={{
            left: {
              color: '#838383',
              marginLeft: '8%',
            },
            right: {
              color: '#838383',
            },
          }}
        />
      </View>
    );
  };

  const CustomTextInput = props => {
    return (
      <View style={{flexDirection: 'row', width: '75%', alignItems: 'center'}}>
        <Composer {...props} textInputStyle={{color: appColor.pinkLight}} />
        <TouchableOpacity>
          <ImageIcon style={{marginHorizontal: '3%'}} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderAvatar = () => {
    return null;
  };

  return (
    <View style={styles.Container}>
      {/* <Modal
          visible={OpenModal}
          transparent
          onRequestClose={() => setOpenModal(false)}
          animationType="slide"
          hardwareAccelerated>
          <View style={styles.centered_View}>
            <View style={styles.List_Modal}>
              <TouchableWithoutFeedback onPress={() => setOpenModal(false)}>
                <View style={styles.modalContainer}>
                  <TouchableOpacity>
                    <Text style={styles.textStyle6}>Setting</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.textStyle6}>View Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.textStyle6}>Block User</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.textStyle6}>Create Group</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.textStyle6}>Delete Message</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Modal> */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.imageStyle}
          onPress={() => navigation.goBack()}>
          <BackImg />
        </TouchableOpacity>
        <View style={styles.imageView}>
          <Image
            source={require('../../../assets/images/ProfilePicture-6.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.textStyle} numberOfLines={1}>
            Samantha
          </Text>
          <Text style={styles.textStyle2}>Typing....</Text>
        </View>
        <View style={styles.contentContainer2}>
          <TouchableOpacity>
            <Call style={styles.imageStyle2} width={25} height={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Video style={styles.imageStyle2} width={25} height={25} />
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        timeFormat="HH:mm"
        style={{color: appColor.white}}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={props => {
          return <CustomBubble {...props} />;
        }}
        renderSend={props => {
          return <SendComponent {...props} />;
        }}
        renderTime={props => {
          return <CustomTime {...props} />;
        }}
        renderInputToolbar={props => {
          return <CustomInputToolbar {...props} />;
        }}
        renderComposer={props => {
          return <CustomTextInput {...props} />;
        }}
        renderActions={props => {
          return (
            <Actions
              {...props}
              options={
                {
                  //   ['Open Camera']: props => {
                  //     handleImagePick();
                  //   },
                  //   ['Open Gallery']: props => {
                  //     handleGallery();
                  //   },
                  //   Cancel: props => {
                  //     console.log('Cancel');
                  //   },
                  // <EmojiBoard showBoard={show} onClick={onClick} />
                }
              }
              icon={() => (
                <TouchableOpacity>
                  {/* <Image source={appImages.plus} style={styles.plus} /> */}
                  <Smile />
                </TouchableOpacity>
              )}
              onSend={args => console.log(args)}
            />
          );
        }}
        alwaysShowSend
        renderAvatar={renderAvatar}
      />
    </View>
  );
}
