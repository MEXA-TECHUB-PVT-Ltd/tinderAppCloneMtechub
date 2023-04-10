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
  imageStyle2: {
    marginLeft: wp('20%'),
    marginTop: hp('-3%'),
  },
  textStyle: {
    fontFamily: fontFamily.fontMedium,
    color: appColor.black,
    marginLeft: wp('7%'),
    fontSize: hp('1.8%'),
  },
  textInputStyle: {
    width: wp('85%'), // 80% of width device screen}
    height: hp('7%'),
    backgroundColor: '#ffffff',
    borderColor: appColor.border,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5%'),
  },
  contentContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:'7%'
  },
  contentView2: {
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  centered_View1: {
    flex: 1,
    backgroundColor: '#00000099',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Success_Modal: {
    width: wp('80%'),
    height: hp('30%'),
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
  },
  exitView: {
    position: 'absolute',
    marginVertical: '4%',
    marginLeft: wp('72%'),
  },
  textStyle7: {
    color: appColor.pink,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: hp('2.4%'),
    marginVertical: hp('5%'),
  },
  textStyle8: {
    color: appColor.black,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.7%'),
    marginBottom: '3.5%',
    marginTop: hp('-2%'),
  },
  buttonView2: {
    alignItems: 'center',
  },
  button2: {
    width: wp('60%'),
    height: hp('6%'),
    backgroundColor: appColor.pink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: hp('2.5%'),
    marginBottom: hp('2%'),
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
  },
  buttonText2: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.white,
    fontSize: hp('1.9%'),
    textAlign: 'center',
    marginRight: wp('2%'),
  },
  contentStyle: {
    alignItems: 'center',
  },
});

export default STYLES;
