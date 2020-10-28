import React, { useRef } from 'react';
import { useWindowDimensions, Animated, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ButtonsSwiper } from './ButtonsSwiper';
import { Login } from './Login';

export function WelcomeSwiper() {
  const marginLeft = useRef(new Animated.Value(0)).current;
  const screenWidth = useWindowDimensions().width;

  function needRightSwipe(): void {
    Animated.timing(marginLeft, {
      toValue: 1,
      duration: 380,
      useNativeDriver: false
    }).start();
  }

  return (
    <View style={commonStyles.flexAntiCenterContainer}>

      <Animated.View style={
        {
          ...commonStyles.loginSwiperContainer,
          marginLeft: marginLeft.interpolate({
            inputRange: [0, 1],
            outputRange: [0, (screenWidth * -1)]
          })
        }
      }>
        <ButtonsSwiper 
          onLoginClick={needRightSwipe}
        />
        
        <Login />
      </Animated.View>
    </View>
  );
}