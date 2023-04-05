import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontFamily} from '../../../consts/fonts';
import {appColor} from '../../../consts/colors';
const STYLES = StyleSheet.create({
  Container: {
    flex: 1,
  },
  card: {
    width: wp('100%'),
    height: hp('65%'),
    marginTop: hp('6%'),
    backgroundColor: appColor.white,
    borderRadius: 25,
  },
  imageStyle: {
    marginTop: hp('9%'),
  },
  imageStyle2: {
    marginTop: hp('2%'),
    marginLeft: hp('1%'),
  },
  contentContainer: {
    alignItems: 'center',
  },
  textStyle: {
    color: appColor.black,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: hp('2.5%'),
    marginLeft: wp('10%'),
    marginVertical: hp('2%'),
  },
  contentContainer2: {
    marginTop: hp('1%'),
  },
  contentContainer3: {
    marginTop: hp('33%'),
  },
  TextInputView: {
    alignItems: 'center',
  },
  TextinputStyle: {
    height: hp('10%'),
    width: wp('75%'),
    marginTop: hp('1%'),
  },
  underlineStyleBase: {
    width: wp('14%'),
    height: hp('6.7%'),
    borderWidth: 1,
    borderColor: appColor.border,
    borderRadius: 5,
    backgroundColor: appColor.white,
    //  margin: 2,
    color: appColor.greyDark,
    fontSize: hp('2%'),
    fontFamily: fontFamily.fontRegular,
  },
});

export default STYLES;
