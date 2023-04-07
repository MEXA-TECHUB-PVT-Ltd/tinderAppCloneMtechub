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
  contentContainer: {
    width: wp('100%'),
    height: hp('38%'),
    backgroundColor: appColor.pink,
  },
  contentContainer2: {
    flex: 1,
    backgroundColor: appColor.white,
  },
  contentView: {
    alignItems: 'center',
  },
  contentContainer3: {
    flexDirection: 'row',
    marginVertical: hp('2%'),
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  textStyle: {
    color: appColor.white,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('2.3%'),
    marginLeft: wp('27%'),
  },
  imageView: {
    width: wp('24%'),
    height: hp('12%'),
    borderRadius: 100,
    marginTop: hp('1%'),
  },
  imageStyle: {
    width: wp('28%'),
    height: hp('14%'),
  },
  textStyle2: {
    color: appColor.white,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: hp('2%'),
    marginTop: hp('1.5%'),
  },
  contentContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle2: {
    marginRight: wp('2%'),
  },
  textStyle3: {
    color: appColor.white,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.7%'),
  },
  textStyle4: {
    color: appColor.white,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.5%'),
  },
  contentContainer5: {
    width: wp('85%'),
  },
  textStyle5: {
    color: appColor.blackMedium,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('2%'),
    marginHorizontal: '5%',
    marginVertical: '3%',
  },
  listView: {
    flex: 1,
    alignItems: 'center',
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
});

export default STYLES;
