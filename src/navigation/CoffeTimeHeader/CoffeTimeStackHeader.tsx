import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function CoffeTimeStackHeader() {
  return (
    <View style={commonStyles.center}>
      <Text style={commonStyles.logoText}>CoffeTime</Text>
    </View>
  )
}