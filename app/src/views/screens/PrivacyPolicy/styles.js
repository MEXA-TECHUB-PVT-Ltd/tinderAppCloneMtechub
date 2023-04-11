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
    marginTop: hp('2.5%'),
    paddingHorizontal: '6%',
  },
  textStyle: {
    color: appColor.black,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.6%'),
  },
});

export default STYLES;
