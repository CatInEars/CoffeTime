import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';

export function CoffeTimeStackHeader() {
  const navigation = useNavigation();

  return (
    <View style={{...commonStyles.center, flexDirection: 'row'}}>
      <HeaderBackButton 
        style={commonStyles.backButton} 
        onPress={() => navigation.goBack()} 
      />
      <Text style={commonStyles.logoText}>CoffeTime</Text>
    </View>
  )
}