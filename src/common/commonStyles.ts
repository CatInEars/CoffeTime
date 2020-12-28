import { StyleSheet, Dimensions } from 'react-native';
import { activeButtonColor, normalButtonColor } from './colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const commonStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  loginPageImage: {
    width: '100%', 
    height: screenHeight + 35,
    position: 'absolute',
    zIndex: -1
  },
  linearGradient: {
    flex: 1, 
    alignItems: 'center', 
    width: '100%', 
    height: screenHeight + 35, 
    position: 'absolute'
  },
  logoTitleTextContainer: {
    marginTop: 101
  },
  logoTitleText: {
    fontFamily: 'LobsterRegular',
    color: 'white',
    fontSize: 64,
  },
  logoLightTextContainer: {
    marginTop: -12,
    left: 89
  },
  logoLightText: {
    fontFamily: 'SFUITextLight',
    color: 'white',
    fontSize: 16
  },
  flexAntiCenterContainer: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  swiperElementsContainer: { 
    width: '50%', 
    height: '100%',
    alignItems: 'center',
  },
  swiperElementsMovedTextLine: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute'
  },
  buttonSwiperTextLineContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonSwiperTextContainer: {
    position: 'relative'
  },
  buttonSwiperText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 8
  },
  buttonSwiperLine: {
    width: 140,
    height: 3,
    backgroundColor: 'white'
  },
  swiperElementsButtonsContainer: {
    height: 204,
    position: 'absolute'
  },
  buttonSwiperButton: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 16,
  },
  facebookButtonText: {
    fontSize: 18, 
    fontFamily: 'SFUITextLight', 
    color: 'white'
  },
  loginSwiperContainer: {
    flexDirection: 'row',
    width: screenWidth * 2,
    height: '100%'
  },
  loginInputContainer: {
    height: 43,
    width: 247,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginInput: {
    width: '90%',
    height: '100%',
    fontSize: 18,
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  loginSection: {
    width: '50%', 
    height: '100%',
    alignItems: 'center'
  },
  loginSubmitContainer: {
    alignItems: 'center', 
    bottom: 100, 
    position: 'absolute'
  },
  selectPhotoContainer: {
    marginTop: '10%', 
    width: 150, 
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  selectedPhoto: {
    width: 152, 
    height: 152, 
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    overflow: 'hidden'
  },
  selectedPhotoCircle: {
    position: 'absolute',
    borderColor: 'white', 
    borderStyle: 'solid', 
    borderWidth: 4, 
    borderRadius: 100,
    zIndex: -1
  },
  selectPhotoPlusIcon: {
    width: 154, 
    height: 154,
    opacity: 0.85
  },
  loginPageErrorText: {
    position: 'absolute', 
    bottom: -30, 
    fontSize: 18, 
    color: 'red'
  },
  errorContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#fdf4e3',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 22,
    color: '#EE7155'
  },
  logoText: {
    fontFamily: 'LobsterRegular', 
    fontSize: 22
  },
  coffeTabNavigatorContainer: {
    width: '100%',
    height: 63,
    position: 'absolute',
    alignItems: 'center',
  },
  coffeTabNavigator: {
    width: 150,
    height: 46,
    top: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center'
  },
  coffeTabNavigatorButtonBlock: {
    width: 75, 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  coffeTabNavigatorBackground: {
    width: '49%',
    height: '85%',
    backgroundColor: normalButtonColor,
    position: 'absolute',
    borderRadius: 20,
    left: 2,
    zIndex: -1
  },
  coffeShopListScreen: {
    marginTop: 63, 
    backgroundColor: 'white'
  },
  coffePreviewContainer: {
    width: '100%',
    height: 130,
    marginBottom: 12,
    flexDirection: 'row'
  },
  coffePreviewImage: {
    width: 130, 
    height: '100%'
  },
  coffePreviewNameContainer: {
    marginVertical: 8,
    marginLeft: 14
  },
  coffePreviewCoffeName: {
    fontSize: 20,
    color: normalButtonColor
  },
  coffePreviewDescribeContainer: {
    marginLeft: 14,
  },
  coffePreviewDescribeText: {
    color: 'gray',
  },
  coffePreviewButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 6,
    bottom: 9
  },
  coffePreviewButtonText: {
    color: '#BBBBBB', 
    fontSize: 14
  },
  shopImage: {
    width: '100%', 
    height: 310, 
    position: 'absolute', 
    zIndex: -1
  },
  shopBannerContainer: {
    width: '100%', 
    height: 310
  },
  shopBannerName: {
    fontFamily: 'LobsterRegular', 
    fontSize: 32,
    color: '#474747',
    marginBottom: 4
  },
  shopBannerAddres: {
    fontSize: 20,
    fontFamily: 'SFUITextRegular',
    color: '#717171'
  },
  shopBannerInfoContainer: {
    position: 'absolute',
    bottom: 2,
    width: '100%', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  drinksContainer: {
    width: '100%',
    paddingRight: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 7,
    backgroundColor: 'white'
  },
  drinkBlock: {
    marginBottom: 7,
    marginLeft: 7,
    width: screenWidth/2 - 14,
    height: 250,
    paddingVertical: 8
  },
  drinkName: {
    fontFamily: 'SFUITextBold', 
    fontSize: 16, 
    color: '#717171',
  },
  drinkType: {
    fontFamily: 'SFUITextRegular', 
    fontSize: 12, 
    color: '#717171',
    marginTop: 2
  },
  drinkImage: {
    width: '100%', 
    height: 120,
    marginTop: 17,
    resizeMode: 'center'
  },
  drinkBlockBottomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 8,
    paddingHorizontal: 16
  },
  drinkPrice: {
    color: normalButtonColor,
    fontFamily: 'LobsterRegular',
    fontSize: 24,
    marginTop: 6
  },
  heartIconContainer: {
    width: 33, 
    height: 33,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  heartIcon: {
    width: '100%',
    height: '100%'
  },
  backButton: {
    position: 'absolute', 
    left: 0
  },
  _button: {
    width: 300,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: normalButtonColor,
  },
  _buttonText: {
    color: 'white',
    fontSize: 18
  }
});