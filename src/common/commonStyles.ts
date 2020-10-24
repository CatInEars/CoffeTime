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
  }
});