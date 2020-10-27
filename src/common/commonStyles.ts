import { StyleSheet } from 'react-native';

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
    height: '100%', 
    position: 'absolute',
    zIndex: -1
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
  swiperElementsContainer: { 
    width: '100%', 
    height: '65%',
    alignItems: 'center'
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
    height: 215,
    position: 'absolute'
  },
  buttonSwiper_Button: {
    width: 300,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 16
  },
  facebookButtonText: {
    fontSize: 18, 
    fontFamily: 'SFUITextLight', 
    color: 'white'
  }
});