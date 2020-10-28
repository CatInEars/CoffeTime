import React from 'react';
import { Animated, Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function DragText(
  { 
    fadeOut, 
    panResponder,
    bottomInterval,
    pan 
  }: any
) {
  return (
    <Animated.View
        style={{
          ...commonStyles.swiperElementsMovedTextLine,
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
              bottom: bottomInterval.interpolate({
                inputRange: [0, 1],
                outputRange: [54, 70]
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