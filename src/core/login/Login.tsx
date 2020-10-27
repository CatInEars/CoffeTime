import React from 'react';
import { Image } from 'react-native';
import { Logo } from './Logo';
import { ButtonSwiper } from './SwiperElements';
import { commonStyles } from '../../common/commonStyles';
import { LinearGradient } from 'expo-linear-gradient';

export function Login() {
  const image = require('../../../images/registr_background.png');
  
  return (
    
    <LinearGradient 
      colors={['transparent', 'rgba(243,233,216,0.85)']} 
      locations={[0.45, 1]} 
      style={commonStyles.loginPage}
    >
      <Logo />
      <Image source={image} style={commonStyles.loginPageImage} />
      <ButtonSwiper />

    </LinearGradient>
  );
}