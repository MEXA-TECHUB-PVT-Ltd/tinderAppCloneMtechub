import {
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ExitImage from '../../../assets/images/ExitImage.svg';
import ImagePick from '../../../assets/images/ImagePick.svg';
import Header1 from '../../../components/Header1';
import CustomButton from '../../../components/CustomButton';
import TextInputCustom1 from '../../../components/TextInputCustom1';
import TextInputCustom3 from '../../../components/TextInputCustom3';
import CustomTextInput2 from '../../../components/CustomTextInput2';
import TextInputCustom2 from '../../../components/TextInputCustom2';
export default function UpdateProfile() {
  const navigation = useNavigation();
  const [Success, setSuccess] = useState(false);
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
              <Text style={styles.textStyle8}>
                Profile updated Successfully
              </Text>
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
      <Header1 title="Update Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Image
              source={require('../../../assets/images/UserDummy.png')}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>
          <TouchableOpacity>
            <ImagePick style={styles.imageStyle2} />
          </TouchableOpacity>
        </View>

        <Text style={styles.textStyle}>Username</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="Lorem ipsum" />
        </View>
        <Text style={styles.textStyle}>Username</Text>
        <View style={styles.contentContainer}>
          <View style={styles.contentView}>
            <TextInputCustom3 placeholder="Lorem ipsum" />
          </View>
          <View style={styles.contentView}>
            <TextInputCustom3 placeholder="Lorem ipsum" />
          </View>
        </View>
        <Text style={styles.textStyle}>Email Address</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="example@gmail.com" />
        </View>
        <Text style={styles.textStyle}>Height</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="173cm" />
        </View>
        <Text style={styles.textStyle}>Gender</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="Male" />
        </View>
        <Text style={styles.textStyle}>I am...</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="Profession here" />
        </View>
        <Text style={styles.textStyle}>I like...</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="Basket ball,Movie,Book" />
        </View>
        <Text style={styles.textStyle}>I appreciate when my date...</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="lorem ipsum lorem ipsum" />
        </View>
        <Text style={styles.textStyle}>Date of Birth</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="19/09/1999" />
        </View>
        <Text style={styles.textStyle}>Location</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="Kha Chi Secondary School" />
        </View>
        <Text style={styles.textStyle}>Academic Qualification</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="Bsc Business" />
        </View>
        <Text style={styles.textStyle}>Graduated University</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="University name here" />
        </View>
        <Text style={styles.textStyle}>Do you smoke?</Text>
        <View style={styles.contentView}>
          <CustomTextInput2 placeholder="No" />
        </View>
        <Text style={styles.textStyle}>Do you drink?</Text>
        <View style={styles.contentView}>
          <CustomTextInput2 placeholder="Yes" />
        </View>
        <Text style={styles.textStyle}>Constellation</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="Lorem ipsum" />
        </View>
        <Text style={styles.textStyle}>Annual Income</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="00,000" />
        </View>
        <Text style={styles.textStyle}>Children</Text>
        <View style={styles.contentView}>
          <TextInputCustom1 placeholder="Nill" />
        </View>
        <Text style={styles.textStyle}>Bio</Text>
        <View style={styles.contentView}>
          <TextInputCustom2 placeholder="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
        </View>
        <View style={styles.contentView2}>
          <CustomButton title="Update" customClick={() => setSuccess(true)} />
        </View>
      </ScrollView>
    </View>
  );
}
