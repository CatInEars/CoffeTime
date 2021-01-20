import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { useNavigation } from '@react-navigation/native';

export function CoffeTimeStackHeader() {
  const navigation = useNavigation();

  return (
    <View style={{...commonStyles.center, flexDirection: 'row'}}>
      <Text style={commonStyles.logoText}>CoffeTime</Text>
    </View>
  )
}