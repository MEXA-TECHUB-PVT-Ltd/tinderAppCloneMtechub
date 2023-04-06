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
    height: hp('11%'),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: appColor.white,
    borderBottomColor: appColor.grey,
    borderBottomWidth: 0.5,
  },
  imageStyle: {
    marginLeft: wp('2%'),
  },
  imageView: {
    height: hp('7%'),
    width: wp('14%'),
    borderRadius: 100,
    backgroundColor: appColor.grey,
    marginLeft: wp('2%'),
  },
  image: {
    height: hp('7%'),
    width: wp('14%'),
    borderRadius: 100,
  },
  headerimage: {
    height: hp('7%'),
    width: wp('7%'),
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
  },
  textView: {
    width: wp('60%'),
  },
  textStyle: {
    fontFamily: fontFamily.fontSemiBold,
    color: appColor.black,
    fontSize: hp('2.2%'),
    width: wp('42%'),
  },
  textStyle2: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.greyDark,
    fontSize: hp('1.7%'),
    marginTop: hp('-0.5%'),
  },
  contentContainer: {
    marginLeft: wp('4%'),
    height: hp('8%'),
    marginTop: hp('1%'),
  },
  contentContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle2: {
    marginHorizontal: '6%',
  },
  wrapperStyle: {
    left: {
      backgroundColor: appColor.orangefaded,
      marginBottom: hp('1%'),
      height: hp('7%'),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },
    right: {
      backgroundColor: appColor.pinkfaded,
      marginBottom: hp('1%'),
      height: hp('7%'),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },
  },
  bubbleTextStyle: {
    right: {
      color: appColor.pinkLight,
      marginLeft: wp('5%'),
      marginRight: wp('5%'),
      fontFamily:fontFamily.fontMedium,
      fontSize:hp('1.6%')
    },
    left: {
      color: appColor.orange,
      marginLeft: wp('5%'),
      marginRight: wp('5%'),
      fontFamily:fontFamily.fontMedium,
      fontSize:hp('1.6%'),
    },
  },
  ToolbarcontainerStyle: {
    backgroundColor: appColor.pinkfaded,
    height: hp('5%'),
    width: wp('100%'),
    Textcolor: '#ffffff',
    shadowRadius: 0,
  },
  icon: {
    width: wp('7%'),
    height: hp('7%'),
    marginLeft: wp('2.2%'),
  },
  send: {
    width: wp('20%'),
    height: hp('6%'),
  },
  plus: {
    width: wp('6%'),
    height: hp('3%'),
  },
  textStyle6: {
    fontFamily: fontFamily.AvenierMedium,
    color: appColor.black,
    fontSize: hp('2%'),
    marginVertical: hp('1.7%'),
  },
  centered_View: {
    flex: 1,
    backgroundColor: 'Transparent',
    marginTop: hp('3%'),
    marginLeft: hp('28%'),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
  },
  List_Modal: {
    width: wp('42%'),
    height: hp('36%'),
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
  },
  modalContainer: {
    marginHorizontal: '12%',
  },
});

export default STYLES;
