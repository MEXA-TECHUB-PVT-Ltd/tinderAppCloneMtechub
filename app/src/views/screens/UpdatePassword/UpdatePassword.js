import {View, ScrollView, Modal, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ExitImage from '../../../assets/images/ExitImage.svg';
import Header1 from '../../../components/Header1';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
export default function UpdatePassword() {
  const navigation = useNavigation();
  const [OldConfirm, setOldConfirm] = useState(false);
  const [OldVisible, setOldVisible] = useState(true);
  const [Show, setShow] = useState(false);
  const [Visible, setVisible] = useState(true);
  const [ShowConfirm, setShowConfirm] = useState(false);
  const [ConfirmVisible, setConfirmVisible] = useState(true);
  const [oldPassword, setoldPassword] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
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
                Password updated Successfully
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Header1 title="Update Password" />
        <View style={styles.contentView}>
          <CustomTextInput
            placeholder="Old Password"
            customClick={() => {
              setOldVisible(!OldVisible);
              setOldConfirm(!OldConfirm);
            }}
            secureTextEntry={OldVisible}
          />
          <CustomTextInput
            placeholder="New Password"
            customClick={() => {
              setVisible(!Visible), setShow(!Show);
            }}
            secureTextEntry={Visible}
          />
          <CustomTextInput
            placeholder="Confirm Password"
            customClick={() => {
              setConfirmVisible(!ConfirmVisible);
              setShowConfirm(!ShowConfirm);
            }}
            secureTextEntry={ConfirmVisible}
          />
        </View>
        <View style={styles.contentView2}>
          <CustomButton title="Update" customClick={() => setSuccess(true)} />
        </View>
      </ScrollView>
    </View>
  );
}
