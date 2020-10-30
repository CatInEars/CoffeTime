import React from 'react';
import { Image, View } from 'react-native';
import { Logo } from './Logo';
import { commonStyles } from '../../common/commonStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { WelcomeSwiper } from './WelcomeSwiper';

export function Welcome() {
  const image = require('../../../images/registr_background.png');

  return (
    <View style={commonStyles.loginPage}>
      <View style={{width: '100%', position: "absolute"}}>
        <LinearGradient
          colors={['transparent', 'rgba(243,233,216,0.85)']}
          locations={[0.45, 1]}
          style={commonStyles.linearGradient}
        />
        <Image source={image} style={commonStyles.loginPageImage} />
      </View>

      <Logo />
      <WelcomeSwiper />
    </View>
  );
}
