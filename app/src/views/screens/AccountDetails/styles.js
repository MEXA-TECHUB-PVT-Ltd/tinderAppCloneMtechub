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
  contentView: {
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  imageView: {
    width: wp('24%'),
    height: hp('12%'),
    borderRadius: 100,
    marginTop: hp('5'),
  },
  imageStyle: {
    width: wp('30%'),
    height: hp('15%'),
    marginLeft: wp('-3%'),
  },
  textStyle2: {
    color: appColor.black,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('2%'),
    marginTop: hp('3.5%'),
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
    marginTop: hp('2%'),
  },
  textStyle3: {
    color: appColor.black,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('1.7%'),
  },
  textStyle4: {
    color: appColor.greyDark,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.7%'),
  },
  itemView2: {
    paddingHorizontal: '6%',
    marginTop: hp('2%'),
  },
});

export default STYLES;
