import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function DrinksList() {
  return (
    <View style={commonStyles.drinksContainer}>
      <View style={commonStyles.drinkBlock}>
        <Text>CoffeName</Text>
      </View>
      <View style={commonStyles.drinkBlock}>
        <Text>CoffeName</Text>
      </View>
      <View style={commonStyles.drinkBlock}>
        <Text>CoffeName</Text>
      </View>
      <View style={commonStyles.drinkBlock}>
        <Text>CoffeName</Text>
      </View>
      <View style={commonStyles.drinkBlock}>
        <Text>CoffeName</Text>
      </View>
      <View style={commonStyles.drinkBlock}>
        <Text>CoffeName</Text>
      </View>
      <View style={commonStyles.drinkBlock}>
        <Text>CoffeName</Text>
      </View><View style={commonStyles.drinkBlock}>
        <Text>CoffeName</Text>
      </View>
    </View>
  );
}