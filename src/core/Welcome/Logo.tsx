import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function Logo() {
  return (
    <View>
     <View style={commonStyles.logoTitleTextContainer}>
      <Text 
        style={commonStyles.logoTitleText}
      >
        CoffeTime
      </Text>
     </View>

      <View style={commonStyles.logoLightTextContainer}>
      <Text
        style={commonStyles.logoLightText}
      >
        территория кофе
      </Text>
      </View>
    </View> 
  )
}