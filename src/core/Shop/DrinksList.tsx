import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function DrinksList() {
  return (
    <View style={commonStyles.drinksContainer}>
      <View style={commonStyles.drinkBlock} />
      <View style={commonStyles.drinkBlock} />
      <View style={commonStyles.drinkBlock} />
      <View style={commonStyles.drinkBlock} />
      <View style={commonStyles.drinkBlock} />
      <View style={commonStyles.drinkBlock} />
    </View>
  );
}