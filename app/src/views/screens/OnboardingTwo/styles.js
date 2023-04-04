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
    backgroundColor: appColor.white,
  },
  imageStyle: {
    marginTop: hp('7%'),
  },
  imageStyle2: {
    marginTop: hp('2%'),
  },
  contentContainer: {
    alignItems: 'center',
  },
  textStyle: {
    color: appColor.black,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('1.7%'),
  },
  contentContainer2: {
    width: wp('80%'),
    alignItems: 'center',
    marginTop: hp('-1%'),
  },
  contentContainer3: {
    position: 'absolute',
    fontSize: hp('1.6%'),
    width: wp('100%'),
    height: hp('50%'),
    marginTop: hp('30%'),
  },
  contentContainer4: {
    width: wp('85%'),
    height: hp('7%'),
    borderWidth: 1,
    borderColor: appColor.border,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4%',
    flexDirection: 'row',
    backgroundColor: appColor.white,
  },
  imageStyle3: {
  marginLeft:wp('9%')
  },
});

export default STYLES;
