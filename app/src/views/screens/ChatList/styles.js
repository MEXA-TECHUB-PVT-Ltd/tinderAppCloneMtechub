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
  itemContainer01: {
    width: wp('90%'),
    height: hp('9%'),
    marginTop: hp('0.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  imageContainer: {
    width: wp('14%'),
    height: hp('7%'),
    backgroundColor: appColor.white,
    borderRadius: 100,
    marginLeft: wp('4.5%'),
  },
  image: {
    width: wp('14%'),
    height: hp('7%'),
    borderRadius: 100,
  },
  itemContent: {
    width: wp('73%'),
    marginLeft: wp('2%'),
  },
  content1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '2%',
  },
  divider: {
    width: wp('90%'),
    borderBottomColor: appColor.grey,
    borderBottomWidth: 1,
    marginLeft: wp('5%'),
    marginVertical: hp('1.5%'),
  },
  textStyle2: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.9%'),
  },
  textStyle3: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.6%'),
  },
  textStyle4: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.55%'),
    marginHorizontal: '2%',
  },
  listView: {
    flex: 1,
    marginTop: hp('2%'),
  },
});

export default STYLES;
