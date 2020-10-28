import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';

export function SwipersButton(
  { 
    item, 
    index
  }: any
) {
  return (
    <TouchableHighlight
      onPress={() => alert('123')}
      style={
        {
          ...commonStyles.buttonSwiper_Button,
          backgroundColor: item.backgroundColor
        }
      }
      underlayColor={item.onPressBackgroundColor}
      key={index.toString()}
    >
      <>
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
      </>
    </TouchableHighlight>
  );
}