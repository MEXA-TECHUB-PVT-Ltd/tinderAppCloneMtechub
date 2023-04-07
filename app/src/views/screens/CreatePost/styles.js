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
  textStyle: {
    color: appColor.white,
    fontFamily: fontFamily.fontMedium,
    fontSize: hp('2.3%'),
    marginLeft: wp('27%'),
  },
  contentContainer2: {
    alignItems: 'center',
    marginTop: hp('7%'),
  },
  contentContainer3: {
    width: wp('100%'),
    height: hp('7.5%'),
    backgroundColor: appColor.pink,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  contentContainer4: {
    width: wp('80%'),
    height: hp('7.5%'),
    alignItems: 'center',
  },
  textStyle2: {
    color: appColor.black,
    fontFamily: fontFamily.fontRegular,
    fontSize: hp('1.45%'),
  },
  contentStyle: {

    alignItems: 'center',
  },
  itemView: {
    width: wp('28'),
    height: hp('14%'),
    borderRadius: 10,
    margin: '2%',
    backgroundColor: appColor.white,
    borderWidth: 1,
    borderColor: '#FF675D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: wp('42'),
    height: hp('25%'),
    borderRadius: 20,
  },
  listView: {
    alignItems: 'center',
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
});

export default STYLES;
