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
  imageStyle: {
    position: 'absolute',
    marginLeft: wp('65%'),
    marginTop: hp('5%'),
  },
  contentContainer:{
    width:wp('80%'),
    height:hp('8%'),
    backgroundColor:"#0909",
    position:'absolute',
    marginLeft:wp('10'),
    marginRight:wp('10%'),
    marginTop:hp('80%'),
    flexDirection:"row",
    justifyContent:'space-around'
  },
  imageStyle2:{
    position:'absolute',
  }
});

export default STYLES;
