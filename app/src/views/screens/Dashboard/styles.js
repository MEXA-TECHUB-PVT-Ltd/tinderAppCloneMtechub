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
  card: {
    width: wp('100%'),
    height: hp('35%'),
    backgroundColor: appColor.pink,
  },
  header: {
    width: wp('100%'),
    height: hp('5%'),
    marginTop: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageStyle: {
    position: 'absolute',
    marginTop: hp('40%'),
  },
  textStyle: {
    fontFamily: fontFamily.fontMedium,
    color: appColor.white,
    fontSize: hp('2.2%'),
    marginHorizontal: wp('15%'),
  },
  Swipercard: {
    borderRadius: 20,
    height: hp('60%'), // 70% of height device screen
    width: wp('87%'), // 80% of width device screen
    marginLeft: hp('1%'),
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    alignItems: 'center',
  },
  swiperView: {
    marginTop: hp('3%'),
  },
  cardimageView: {
    height: hp('46%'), // 70% of height device screen
    width: wp('82%'), // 80% of width device screen
    borderRadius: 20,
    marginTop: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: wp('75%'),
    height: hp('5%'),
    marginTop: hp('4.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  element: {
    height: hp('60%'), // 70% of height device screen
    width: wp('87%'), // 80% of width device screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer2: {
    position: 'absolute',
    width: wp('68%'),
    height: hp('9%'),
    marginTop: hp('39%'),
    marginLeft: wp('-11%'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColor.white,
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingHorizontal: '7%',
  },
  imageStyle2: {
    marginLeft: wp('0.5%%'),
  },
  contentContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColor.pink,
    width: wp('20%'),
    height: hp('3.5%'),
    borderRadius: 25,
    marginLeft: wp('-5%'),
  },
  contentContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle2: {
    color: appColor.black,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.9%'),
  },
  textStyle3: {
    color: appColor.black,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: hp('1.9%'),
  },
  textStyle4: {
    color: appColor.white,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.4%'),
    marginLeft: wp('2%'),
  },
  contentContainer5: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default STYLES;
