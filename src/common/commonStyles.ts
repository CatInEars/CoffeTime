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
    color: 'white',
    fontSize: 64,
  },
  logoLightTextContainer: {
    marginTop: -12,
    left: 89
  },
  logoLightText: {
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
    fontFamily: 'Lobster-Regular', 
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
    backgroundColor: 'lightgray', 
    marginBottom: 12,
    flexDirection: 'row'
  },
  coffePreviewImage: {
    width: 130, 
    height: '100%'
  },
  coffePreviewInfoContainer: {

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