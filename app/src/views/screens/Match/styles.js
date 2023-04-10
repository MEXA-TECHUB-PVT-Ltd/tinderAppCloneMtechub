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
  contentView: {
    alignItems: 'center',
  },
  imageStyle: {
    marginTop: hp('2%'),
    marginLeft: hp('1%'),
  },
  imageStyle2: {
    marginTop: hp('6%'),
  },
  contentContainer: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: hp('33%'),
    alignItems: 'center',
    marginLeft: wp('33%'),
    marginRight: wp('33%'),
  },
  textStyle: {
    color: appColor.white,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('2.6%'),
  },
  imageStyle3: {
    width: wp('5%'),
    height: hp('5%'),
    marginLeft: wp('2%'),
  },
  textStyle2: {
    color: appColor.white,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.6%'),
    position: 'absolute',
    marginTop: hp('39%'),
    alignItems: 'center',
    marginLeft: wp('15%'),
    marginRight: wp('15%'),
  },
  imageView: {
    width: wp('30%'),
    height: hp('15%'),
    backgroundColor: '#fff',
    borderRadius: 100,
    marginHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer2: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: hp('46.5%'),
    alignItems: 'center',
    marginLeft: wp('15%'),
    marginRight: wp('15%'),
  },
  imageStyle4: {
    marginLeft: wp('-40%'),
  },
  imageStyle5: {
    width: wp('28%'),
    height: hp('14%'),
    borderRadius: 100,
  },
  textStyle3: {
    color: appColor.white,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.6%'),
  },
});

export default STYLES;
