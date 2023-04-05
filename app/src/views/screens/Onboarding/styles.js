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
    marginTop: hp('11%'),
  },
  imageStyle2: {
    marginTop: hp('-40%'),
  },
  contentContainer: {
    alignItems: 'center',
  },
  textStyle: {
    color: appColor.black,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: hp('2.5%'),
    marginVertical: hp('3%'),
  },
  textStyle2: {
    color: appColor.blackDark,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.4%'),
    paddingHorizontal: wp('2%'),
    lineHeight: 20,
  },
  contentContainer2: {
    width: wp('80%'),
    alignItems: 'center',
  },
  contentContainer3: {
    flexDirection: 'row',
    marginVertical: '5%',
  },
  imageStyle3: {
    marginHorizontal: '1%',
  },
  contentContainer4: {
    height: hp('6%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '7%',
  },
});

export default STYLES;
