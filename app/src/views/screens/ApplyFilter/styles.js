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
  header: {
    width: wp('100%'),
    height: hp('7.5%'),
    backgroundColor: appColor.pink,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    color: appColor.white,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('2.3%'),
    marginLeft: wp('27%'),
  },
  contentContainer3: {
    width: wp('100%'),
    height: hp('7.5%'),
    backgroundColor: appColor.pink,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  tabView: {
    flex: 1,
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsView: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: hp('65%'),
  },
  buttonsView1: {
    flexDirection: 'row',
    marginTop: hp('5%'),
  },
  itemView: {
    width: wp('42'),
    height: hp('25%'),
    borderRadius: 20,
    margin: '2.5%',
    backgroundColor: appColor.grey,
  },
  textStyle2: {
    marginTop: hp('-7%'),
    marginLeft: wp('4%'),
    color: appColor.white,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('1.7%'),
  },
  itemImage: {
    width: wp('42'),
    height: hp('25%'),
    borderRadius: 20,
  },
  textStyle3: {
    marginLeft: wp('2%'),
    color: appColor.white,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.5%'),
  },
  contentContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('-0.5%'),
  },
  imageStyle: {
    marginLeft: wp('3%'),
  },
  buttonsView2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4%',
  },
});

export default STYLES;
