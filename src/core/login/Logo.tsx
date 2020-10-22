import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function Logo() {
  return (
    <View>
     <View style={commonStyles.logoTitleTextContainer}>
      <Text 
        style={
          [
            commonStyles.logoTitleText, 
            {
              fontFamily: 'Lobster-Regular'
            }
          ]
        }
      >
        CoffeTime
      </Text>
     </View>

      <View style={commonStyles.logoLightTextContainer}>
      <Text
        style={
          [
            commonStyles.logoLightText,
            {
              fontFamily: 'SFUITextLight'
            }
          ]
        }
      >
        территория кофе
      </Text>
      </View>
    </View> 
  )
}