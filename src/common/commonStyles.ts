import { StyleSheet, Dimensions } from 'react-native';
import { normalButtonColor } from './colors';

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
  loginInput: {
    height: 36,
    width: 247,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderBottomWidth: 3,
    color: 'white'
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
    backgroundColor: 'skyblue'
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