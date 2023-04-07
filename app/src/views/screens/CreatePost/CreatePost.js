import {View, Text, TouchableOpacity, FlatList, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import BackWhite from '../../../assets/images/BackWhite.svg';
import Upload from '../../../assets/images/Upload.svg';
import Cloud from '../../../assets/images/Cloud.svg';
import ExitImage from '../../../assets/images/ExitImage.svg';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';

export default function CreatePost() {
  const navigation = useNavigation();
  const [Success, setSuccess] = useState(false);
  const Posts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Cloud />
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <Modal
        visible={Success}
        transparent
        onRequestClose={() => setSuccess(false)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_View1}>
          <View style={styles.Success_Modal}>
            <TouchableOpacity
              onPress={() => setSuccess(false)}
              style={styles.exitView}>
              <ExitImage />
            </TouchableOpacity>
            <View style={styles.contentStyle}>
              <Text style={styles.textStyle7}>Success</Text>
              <Text style={styles.textStyle8}>Post Created Successfully</Text>
            </View>
            <View style={styles.buttonView2}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={styles.button2}>
                <Text style={styles.buttonText2}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.contentContainer3}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackWhite />
        </TouchableOpacity>
        <Text style={styles.textStyle}>CreatePost</Text>
      </View>
      <View style={styles.contentContainer2}>
        <Upload />
        <View style={styles.contentContainer4}>
          <Text numberOfLines={2} style={styles.textStyle2}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut{' '}
          </Text>
        </View>
      </View>
      <View style={styles.listView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Posts}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.contentStyle}>
        <CustomButton
          title="Create Post"
          customClick={() => setSuccess(true)}
        />
      </View>
    </View>
  );
}
