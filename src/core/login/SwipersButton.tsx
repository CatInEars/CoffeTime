import React from 'react';
import { Animated, Text, Image } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function SwipersButton(
  { 
    item, 
    index, 
    buttonContainerScroll 
  }: any
) {
  return (
    <Animated.View
      style={
        {
          ...commonStyles.buttonSwiper_Buttons,
          bottom: buttonContainerScroll.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 300]
          }),
          backgroundColor: item.backgroundColor
        }
      }
      key={index}
    >
      {
        item.image !== null && 
        <Image 
          source={item.image} 
          style={
            {
              width: item.imageWidth, 
              height: item.imageHeight
            }
          } 
        />
      }

      <Text
        style={
          {
            ...commonStyles.facebookButtonText,
            color: item.textColor
          }
        }
      >
        {item.title}
      </Text>
    </Animated.View>
  );
}