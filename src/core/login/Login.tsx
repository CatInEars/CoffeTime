import React from 'react';
import { ImageBackground } from 'react-native';
import { Logo } from './Logo';
import { commonStyles } from '../../common/commonStyles';

export function Login() {
  const image = require('../../../images/registr_background.png');
  
  return (
    <ImageBackground style={commonStyles.loginPage} source={image}>
      <Logo />
    </ImageBackground>
  )
}