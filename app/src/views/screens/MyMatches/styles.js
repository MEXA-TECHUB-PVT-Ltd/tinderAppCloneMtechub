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
    marginTop: hp('3%'),
  },
  contentView2: {
    alignItems: 'center',
    marginTop: hp('43%'),
  },
  contentStyle: {
    alignItems: 'center',
  },
  listView: {
    flex: 1,
    marginTop: hp('3%'),
    alignItems: 'center',
  },
  itemView: {
    width: wp('42'),
    height: hp('23%'),
    borderRadius: 20,
    margin: '2.5%',
    backgroundColor: appColor.grey,
  },
  itemImage: {
    width: wp('42'),
    height: hp('23%'),
    borderRadius: 20,
  },
  textStyle: {
    marginTop: hp('-5%'),
    marginLeft: wp('4%'),
    color: appColor.white,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('1.7%'),
  },
});

export default STYLES;
