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
    flexDirection: 'row',
    marginVertical: hp('4%'),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contentContainer3: {
    flexDirection: 'row',
  },
  textStyle2: {
    fontFamily: fontFamily.fontMedium,
    color: appColor.pink,
    fontSize: hp('1.8%'),
    marginLeft: wp('10%'),
  },
  textStyle3: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.6%'),
    marginLeft: wp('2%'),
  },
  contentContainer4: {
    marginTop: hp('15.2%'),
  },
});

export default STYLES;
