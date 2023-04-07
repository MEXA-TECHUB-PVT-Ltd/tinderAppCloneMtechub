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
    width: wp('13%'),
    height: hp('6.5%'),
    backgroundColor: appColor.white,
    borderRadius: 100,
    marginLeft: wp('4.5%'),
  },
  image: {
    width: wp('13%'),
    height: hp('6.5%'),
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
    borderBottomColor: appColor.divider,
    borderBottomWidth: 1,
    marginLeft: wp('5%'),
    marginVertical: hp('1.5%'),
  },
  textStyle2: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.8%'),
  },
  textStyle3: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.5%'),
  },
  textStyle4: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.4%'),
    marginHorizontal: '2%',
  },
  listView: {
    flex: 1,
    marginTop: hp('2%'),
  },
});

export default STYLES;
