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
    alignItems: 'center',
  },
  TextInput: {
    width: wp('90%'), // 80% of width device screen}
    height: hp('7%'),
    backgroundColor: appColor.white,
    borderColor: appColor.border,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },
  TextinputStyle: {
    marginLeft: wp('2%'),
    fontFamily: fontFamily.fontRegular,
    width: wp('67%'),
    color: appColor.greyDark,
  },
  imageStyle: {
    marginLeft: wp('3%'),
  },
  listView: {
    flex: 1,
    marginTop: hp('3%'),
  },
  itemView: {
    width: wp('42'),
    height: hp('25%'),
    borderRadius: 20,
    margin: '2.5%',
    backgroundColor: appColor.grey,
  },
  itemImage: {
    width: wp('42'),
    height: hp('25%'),
    borderRadius: 20,
  },
  contentView: {
    alignItems: 'center',
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
