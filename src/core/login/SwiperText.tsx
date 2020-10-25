import React from 'react';
import { Animated, Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function SwiperText(
  { 
    fadeOut, 
    panResponder, 
    swipeControll,
    bottomInterval,
    pan 
  }: any
) {
  return (
    <Animated.View
        style={{
          ...commonStyles.buttonSwiperSwiperElement,
          transform: [{translateY: pan.y}],
          opacity: fadeOut.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
          })
        }}

        {...panResponder.panHandlers}
      >
        <Animated.View 
          style={
            {
              ...commonStyles.buttonSwiperTextLineContainer,
              bottom: 
                swipeControll ? 
                    fadeOut.interpolate({
                      inputRange: [0, 1],
                      outputRange: [56, 100]
                    })
                  : bottomInterval.interpolate({
                    inputRange: [0, 1],
                    outputRange: [48, 64]
                  })

            }
          }
        >
          <View style={commonStyles.buttonSwiperTextContainer}>
            <Text style={{
                ...commonStyles.buttonSwiperText,
                fontFamily: 'SFUITextLight'
              }
            }>
              Проведите вверх
            </Text>
          </View>

          <View style={{...commonStyles.buttonSwiperLine}} />
        </Animated.View>
      </Animated.View>
  );
}