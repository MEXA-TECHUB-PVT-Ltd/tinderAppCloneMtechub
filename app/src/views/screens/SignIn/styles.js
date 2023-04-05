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
    marginTop: hp('2%'),
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
    marginTop: hp('3%'),
  },
  contentContainer4: {
    width: wp('100%'),
    marginTop: hp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: appColor.grey,
    width: wp('20%'),
  },
  textStyle1: {
    fontFamily: fontFamily.fontMedium,
    color: appColor.greyDark,
    fontSize: hp('1.6%'),
    marginHorizontal: wp('2.5%'),
  },
  bottomView: {
    flexDirection: 'row',
    marginBottom: hp('2%'),
    marginTop: hp('1%'),
  },
  textStyle2: {
    fontFamily: fontFamily.fontMedium,
    color: appColor.greyDark,
    fontSize: hp('1.7%'),
  },
  textStyle3: {
    fontFamily: fontFamily.fontSemiBold,
    color: appColor.pink,
    fontSize: hp('1.7%'),
  },
  contentContainer5: {
    width: wp('100%'),
    marginVertical: '2%',
    height: hp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer6: {
    width: wp('80%'),
    alignItems: 'flex-end',
    marginVertical: '1.5%',
  },
  textStyle4: {
    fontFamily: fontFamily.fontMedium,
    color: appColor.pink,
    fontSize: hp('1.5%'),
  },
});

export default STYLES;
