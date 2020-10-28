import React from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { Logo } from './Logo';
import { commonStyles } from '../../common/commonStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { WelcomeSwiper } from './WelcomeSwiper';

export function Welcome() {
  const image = require('../../../images/registr_background.png');
  const screenHeight = useWindowDimensions().height;

  return (
    <View style={commonStyles.loginPage}>
      <LinearGradient
        colors={['transparent', 'rgba(243,233,216,0.85)']}
        locations={[0.45, 1]}
        style={{flex: 1, alignItems: 'center'}}
      >
        <Image source={image} style={commonStyles.loginPageImage} />
      </LinearGradient>

      <Logo />
      <WelcomeSwiper />
    </View>
  );
}
